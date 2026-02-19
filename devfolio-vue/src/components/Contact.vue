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