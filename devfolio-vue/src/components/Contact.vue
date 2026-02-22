<template>
  <section id="contact" class="contact-section">
    <div class="container mx-auto">
      <h2 class="section-title">Contact</h2>
      <div class="row justify-content-center">
        <div class="col-10 col-lg-6">
          <form
            id="contactForm"
            ref="form"
            @submit="sendEmail"
            class="contact-form"
            novalidate
          >
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                v-model="name"
                class="form-control"
                id="name"
                name="name"
                required
              />
              <div class="invalid-feedback">Please provide your name.</div>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="email"
                name="email"
                required
              />
              <div class="invalid-feedback">
                Please provide your email address.
              </div>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea
                v-model="message"
                class="form-control"
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
              <div class="invalid-feedback">Please provide a message.</div>
            </div>
            <button
              type="submit"
              id="sendemail"
              class="btn btn-primary btn-submit"
              :disabled="isFormEmpty || isLoading"
            >
              {{ isLoading ? "Sending..." : "Send Message" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const form = ref(null);
const isLoading = ref(false);

const name = ref("");
const email = ref("");
const message = ref("");

const isFormEmpty = computed(() => {
  return !name.value.trim() || !email.value.trim() || !message.value.trim();
});

const notyf = new Notyf({
  duration: 3000,
  ripple: true,
  position: { x: "right", y: "bottom" },
  types: [
    { type: "success", background: "#22c55e", icon: false },
    { type: "error", background: "#ef4444", icon: false },
  ],
});

const sendEmail = async (e) => {
  e.preventDefault();

  if (!form.value.querySelector("#email").checkValidity()) {
    notyf.error("Please provide a valid email address.");
    return;
  }

  const formData = {
    name: name.value.trim(),
    email: email.value.trim(),
    message: message.value.trim(),
  };

  isLoading.value = true;
  const formUrl = "/api/contact";

  try {
    const response = await fetch(formUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      notyf.success("Message sent successfully!");
      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      const error = await response.json();
      notyf.error(`${error.message || "Failed to send message."}`);
    }
  } catch (error) {
    notyf.error("Something went wrong. Please try again.");
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.contact-section {
  background-color: var(--color-primary);
  padding: 100px 0;
}

.contact-form {
  background-color: var(--color-primary);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-tertiary);
}

.form-label {
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: 0.5rem;
}

.form-control {
  background-color: var(--color-primary);
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: var(--color-secondary);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid var(--color-tertiary);
}

.form-control:focus {
  background-color: var(--color-primary);
  border-color: var(--color-accent);
  color: var(--color-secondary);
  box-shadow: 0 0 0 0.2rem rgba(162, 80, 80, 0.25);
}

.form-control::placeholder {
  color: var(--color-secondary);
  opacity: 0.5;
}

.btn-submit {
  background-color: var(--color-accent);
  border: none;
  color: var(--color-primary);
  padding: 12px 40px;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  width: 100%;
}

.btn-submit:hover {
  background-color: var(--color-tertiary);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.invalid-feedback {
  display: block;
  color: var(--color-tertiary);
}

.was-validated .form-control:invalid {
  border-color: #dc3545;
}

.was-validated .form-control:valid {
  border-color: #28a745;
}

/* For Small Screens */
@media (min-width: 576px) {
  .contact-form {
    padding: 1.5rem;
  }
}

/* For Medium/Tablets */
@media (min-width: 768px) {
  .contact-section {
    padding: 150px 0;
  }
}
</style>
