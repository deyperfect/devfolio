<template>
    <section id="contact" class="contact-section">
        <div class="container mx-auto">
            <h2 class="section-title">Contact</h2>
            <div class="row justify-content-center">
                <div class="col-10 col-lg-6">
                    <form id="contactForm" action="/contact" method="post" class="contact-form">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" name="name" required>
                            <div class="invalid-feedback">
                                Please provide your name.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                            <div class="invalid-feedback">
                                Please provide a valid email address.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
                            <div class="invalid-feedback">
                                Please provide a message.
                            </div>
                        </div>
                        <button type="submit" id="sendemail" class="btn btn-primary btn-submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact-section {
    background-color: var(--color-primary);
    padding: 80px 0;
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
        padding: 60px 0;
    } 
}

</style>