 const submitBtn = document.getElementById("submitBtn");
  const responseText = document.getElementById("response");

  submitBtn.addEventListener("click", async () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      responseText.textContent = "All fields are required";
      return;
    }

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        responseText.style.color = "green";
        responseText.textContent = data.message || "Message sent successfully!";
      } else {
        responseText.style.color = "red";
        responseText.textContent = data.error || "Something went wrong!";
      }

    } catch (err) {
      responseText.style.color = "red";
      responseText.textContent = "Failed to send message. Try again later.";
      console.error(err);
    }
  });