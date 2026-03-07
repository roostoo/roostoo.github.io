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

    // Build DOM nodes — never inject via innerHTML to avoid XSS patterns
    var label = document.createElement("span");
    label.className = "waitlist-label";
    label.textContent = "Confirmed";

    var heading = document.createElement("h2");
    heading.className = "waitlist-title";
    heading.textContent = "You\u2019re on the list";

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
  }
});
