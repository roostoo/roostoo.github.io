document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("waitlist-form");
  if (!form) return;

  // Google Apps Script endpoint
  var APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxb7h80KICrU_FJGJSR63D0z53iNJvkLc_kRRn9n8RNWW-V22gGADYOcL6mG3mwqsrZig/exec";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var btn = form.querySelector(".waitlist-submit");
    var btnLabel = btn ? btn.textContent : "";
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Sending...";
    }
    clearError();

    var emailInput = form.querySelector("#waitlist-email");
    var honeypot = form.querySelector("[name='b_honeypot']");
    var email = emailInput ? emailInput.value.trim() : "";

    // Basic email check before sending
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (btn) {
        btn.disabled = false;
        btn.textContent = "Notify Me";
      }
      return;
    }

    var payload = new URLSearchParams();
    payload.append("email", email);
    payload.append("b_honeypot", honeypot ? honeypot.value : "");
    payload.append("_origin", window.location.origin);

    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: payload,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      mode: "no-cors",
    }).then(showThankYou, function () {
      // fetch rejects only when the request never left the browser (offline,
      // DNS failure, blocked by an extension), so nothing was subscribed.
      if (btn) {
        btn.disabled = false;
        btn.textContent = btnLabel;
      }
      showError();
    });
  });

  function clearError() {
    var existing = form.querySelector(".waitlist-error");
    if (existing) existing.parentNode.removeChild(existing);
  }

  function showError() {
    clearError();

    var error = document.createElement("p");
    error.className = "waitlist-error";
    error.textContent =
      "We couldn\u2019t reach the signup service, so your email wasn\u2019t submitted. Check your connection or ad blocker and try again.";

    form.appendChild(error);
  }

  function showThankYou() {
    var section = document.querySelector(".waitlist-inner");
    if (!section) return;

    // Build the thank you screen
    var label = document.createElement("span");
    label.className = "waitlist-label";
    label.textContent = "Confirmed";

    var heading = document.createElement("h2");
    heading.className = "waitlist-title";
    heading.textContent = "You\u2019re on the list";
    heading.setAttribute("tabindex", "-1");

    var copy = document.createElement("p");
    copy.className = "waitlist-copy";
    copy.textContent = "We\u2019ll notify you ";
    var acc = document.createElement("span");
    acc.className = "text-accent";
    acc.textContent = "as soon as access opens";
    copy.appendChild(acc);
    copy.appendChild(document.createTextNode(" \u2014 including new "));
    var w1 = document.createElement("span");
    w1.className = "text-white";
    w1.textContent = "Agent releases";
    copy.appendChild(w1);
    copy.appendChild(document.createTextNode(" and live "));
    var w2 = document.createElement("span");
    w2.className = "text-white";
    w2.textContent = "trading competitions";
    copy.appendChild(w2);
    copy.appendChild(document.createTextNode("."));

    var hint = document.createElement("p");
    hint.className = "waitlist-hint";
    hint.textContent = "No spam \u2014 just launches and invites.";

    var link = document.createElement("a");
    link.href = "https://app.roostoo.com";
    link.className = "waitlist-submit portal-link";
    link.textContent = "Go to Roostoo Portal";

    while (section.firstChild) section.removeChild(section.firstChild);
    section.appendChild(label);
    section.appendChild(heading);
    section.appendChild(copy);
    section.appendChild(hint);
    section.appendChild(link);
    heading.focus();
  }
});
