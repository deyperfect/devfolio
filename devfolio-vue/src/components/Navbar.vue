<template>
    <header>
        <!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg fixed-top" id="mynavbar">
            <div class="container mx-auto">
                <RouterLink class="navbar-brand" :to="{ name: 'Home' }">EP</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Open navigation menu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-center" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <RouterLink class="nav-link" :to="{ name: 'Home' }">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/#projects">Projects</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/#tools">Tech Stack</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" :to="{ name: 'Contact' }">Contact</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Navbar End -->
    </header>
</template>

