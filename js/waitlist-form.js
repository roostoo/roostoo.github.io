document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("mc-embedded-subscribe-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var btn = form.querySelector(".waitlist-submit");
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Sending...";
    }

    var formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    }).finally(function () {
      showThankYou();
    });
  });

  function showThankYou() {
    var section = document.querySelector(".waitlist-inner");
    if (!section) return;
    section.innerHTML =
      '<span class="waitlist-label">Confirmed</span>' +
      '<h2 class="waitlist-title">You\'re on the list</h2>' +
      '<p class="waitlist-copy">We\'ll notify you <span class="text-accent">as soon as access opens</span> — including new <span class="text-white">Agent releases</span> and live <span class="text-white">trading competitions</span>.</p>' +
      '<p class="waitlist-hint">No spam — just launches and invites.</p>' +
      '<a href="https://app.roostoo.com" class="waitlist-submit portal-link">Go to Roostoo Portal</a>';
  }
});
