(function () {
  var $ = function (id) { return document.getElementById(id); };

  /* Launch date: two months after the page was made (27 December 2026, midnight India time). */
  var LAUNCH = Date.parse('2026-12-27T00:00:00+05:30');
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  function tick() {
    var s = Math.floor(Math.max(0, LAUNCH - Date.now()) / 1000);
    $('cd').textContent = pad(Math.floor(s / 86400));
    $('ch').textContent = pad(Math.floor(s % 86400 / 3600));
    $('cm').textContent = pad(Math.floor(s % 3600 / 60));
    $('cs').textContent = pad(s % 60);
  }
  tick(); setInterval(tick, 1000);

  /* Newsletter. Set NEWSLETTER_URL to a form service address (for example a Formspree endpoint)
     when the page is hosted on your own site. Left empty, the visitor's email app opens instead. */
  var NEWSLETTER_URL = '';
  var TO = 'hello@jodhahospatablity.com';
  var msg = $('msg');
  function say(t, err) { msg.textContent = t; msg.className = 'msg' + (err ? ' err' : ''); }
  $('newsForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var v = $('email').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) { say('Enter a valid email address.', true); $('email').focus(); return; }
    if (NEWSLETTER_URL) {
      say('Sending...');
      fetch(NEWSLETTER_URL, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify({ email: v }) })
        .then(function (r) { if (!r.ok) throw new Error('bad'); say('Thank you. We will email you when the website is ready.'); $('email').value = ''; })
        .catch(function () { say('Could not send. Please email ' + TO + ' to join the list.', true); });
    } else {
      say('Your email app should open. Press send to join the list. If it does not open, email ' + TO + '.');
      try { window.location.href = 'mailto:' + TO + '?subject=' + encodeURIComponent('Newsletter signup') + '&body=' + encodeURIComponent('Please add ' + v + ' to the newsletter list.'); } catch (x) {}
    }
  });

  /* Social links without a profile address yet do nothing. */
  Array.prototype.forEach.call(document.querySelectorAll('[data-social]'), function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); });
  });
})();
