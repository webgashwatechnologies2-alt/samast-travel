<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uttarakhand Char Dham Yatra Tour Packages | Best Deals</title>
    <meta name="description"
        content="Book customized Uttarakhand Char Dham Yatra tour packages (Yamunotri, Gangotri, Kedarnath, Badrinath) at the best guaranteed prices. Travel with support.">

    <!-- Favicon -->
    <link rel="icon" href="">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>

<body>

    <?php $package = include 'package.php' ?>

    <!-- ===== Navbar ===== -->
    <nav class="navbar navbar-expand-lg shadow-sm py-1">
        <div class="container">

            <a class="navbar-brand fw-bold" href="#">
                <img src="./images/icons/main-logo.webp" alt="samast travel" class="main-logo">
            </a>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarContent">

                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

                    <li class="nav-item">
                        <a class="nav-link active" href="#banner">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#packages">Packages</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>

                </ul>

                <a href="#packages" class="btn btn-primary px-4 d-none d-lg-inline-block">
                    View Packages
                </a>

            </div>
        </div>
    </nav>

    <!-- ===== Hero Section ===== -->
    <section class="hero" id="banner">
        <div class="overlay">
            <div class="container">

                <div class="row justify-content-center">

                    <!-- Hero Text -->
                    <div class="col-12 text-center mb-4">
                        <div>
                            <span class="badge bg-primary-subtle offer-badge text-primary mb-3 px-3 py-2">
                                Get Your Free Quote & Save Upto 25% OFF
                            </span>
                        </div>


                        <h1 class="mb-3">
                            Char Dham Yatra Tour Packages
                        </h1>

                        <div class="d-flex justify-content-center mb-3">
                            <p class="p1">
                                Discover the sacred shrines of Uttarakhand: Yamunotri, Gangotri, Kedarnath, Badrinath,
                                Haridwar, and Rishikesh.
                            </p>
                        </div>

                        <p class="para">
                            <span><i class="fa-solid fa-tag me-1"></i>Best Prices</span>
                            <span><i class="fa-solid fa-headset me-1"></i>24/7 Travel Support</span>
                            <span><i class="fa-solid fa-map me-1"></i>Experienced Drivers & Guides</span>
                        </p>

                    </div>

                    <!-- Hero Form -->
                    <div class="col-12 col-xl-11">
                        <div class="hero-form">
                            <form action="mail.php" method="POST">
                                <div class="row g-0">

                                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                                        <div class="input-group">
                                            <span class="input-group-text">
                                                <i class="fa-solid fa-user"></i>
                                            </span>
                                            <input type="text" class="form-control" name="name" id="hero-name"
                                                placeholder="Your Name" required>
                                        </div>
                                    </div>

                                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                                        <div class="input-group">
                                            <span class="input-group-text">
                                                <i class="fa-solid fa-envelope"></i>
                                            </span>
                                            <input type="email" class="form-control" name="email" id="hero-email"
                                                placeholder="Email Address" required>
                                        </div>
                                    </div>

                                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                                        <div class="input-group">
                                            <span class="input-group-text">
                                                <i class="fa-solid fa-phone"></i>
                                            </span>
                                            <input type="tel" class="form-control" name="phone" id="hero-phone"
                                                placeholder="Your Number" required>
                                        </div>
                                    </div>

                                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                                        <div class="input-group">
                                            <span class="input-group-text">
                                                <i class="fa-solid fa-city"></i>
                                            </span>
                                            <input type="text" class="form-control" name="city" id="hero-city"
                                                placeholder="Your City" required>
                                        </div>
                                    </div>

                                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                                        <div class="input-group">
                                            <span class="input-group-text">
                                                <i class="fa-solid fa-location-dot"></i>
                                            </span>
                                            <select class="form-select" name="package" id="hero-package" required>
                                                <option value="" selected disabled>Select Package</option>
                                                <option value="Complete Char Dham Yatra Package">Complete Char Dham
                                                    Yatra</option>
                                                <option value="Do Dham Yatra (Kedarnath & Badrinath)">Do Dham Yatra
                                                    (Kedarnath & Badrinath)</option>
                                                <option value="Kedarnath Dham Yatra">Kedarnath Dham Yatra</option>
                                                <option value="Yamunotri Dham Tour From Haridwar">Yamunotri Dham Tour
                                                </option>
                                                <option value="Gangotri Dham Tour From Haridwar">Gangotri Dham Tour
                                                </option>
                                                <option value="Haridwar Rishikesh Spitritual Tour">Haridwar Rishikesh
                                                    Spitritual Tour</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-12 col-sm-6 col-md-4 col-lg-2 d-flex align-items-stretch">
                                        <button type="submit" class="btn btn-primary w-100" id="hero-submit">
                                            <i class="fa-solid fa-paper-plane me-1"></i> Book Now
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!-- ===== Packages Section ===== -->
    <section class="packages-section" id="packages">
        <div class="container">

            <div class="section-heading">
                <h2 class="title">Our Best Uttarakhand Char Dham Yatra Packages</h2>
                <p>Handpicked itineraries for a sacred and unforgettable pilgrimage experience</p>
            </div>

            <div class="row g-4">
                <?php foreach ($package as $pkg): ?>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="package-card" id="<?= $pkg["package-id"]; ?>">

                        <!-- Card Image + Tags -->
                        <div class="pack-img">
                            <img src="<?= $pkg["package-image"]; ?>" class="pkg-image"
                                alt="<?= htmlspecialchars($pkg['package-title']); ?> tour package" loading="lazy">
                            <div class="package-tags">
                                <span class="pack-tag pack-duration">
                                    <i class="fa-regular fa-clock me-1"></i><?= $pkg["package-duration"]; ?>
                                </span>
                                <span class="pack-tag pack-offer">
                                    <i class="fa-solid fa-percent me-1"></i><?= $pkg["package-offer"]; ?>
                                </span>
                            </div>
                        </div>

                        <!-- Card Body -->
                        <div class="package-content">

                            <h3 class="pack-title"><?= $pkg["package-title"]; ?></h3>

                            <!-- Price -->
                            <div class="price-wrapper">
                                <span class="price-label">Price</span>
                                <div class="price-value">
                                    <span class="currency">₹</span>
                                    <span class="amount"><?= $pkg["package-price"]; ?></span>
                                    <span class="suffix">/-&nbsp;<span class="price-per">Per Person</span></span>
                                </div>
                            </div>

                            <!-- Destinations Covered -->
                            <div class="pkg-destinations">
                                <span class="dest-label">
                                    Destinations Covered
                                </span>
                                <div class="dest-tags">
                                    <?php foreach ($pkg["package-destinations"] as $dest): ?>
                                    <span class="dest-tag"><?= $dest ?></span>
                                    <?php endforeach; ?>
                                </div>
                            </div>

                            <!-- Highlights -->
                            <div class="pac-attractions">
                                <h4 class="pack-subtitle">Package Highlights</h4>
                                <ul>
                                    <?php foreach (array_slice($pkg["package-attraction"], 0, 5) as $attraction): ?>
                                    <li>
                                        <i class="fa-solid fa-circle-check"></i>
                                        <?= $attraction; ?>
                                    </li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>

                        </div>

                        <!-- Card Footer -->
                        <div class="pack-price-footer">
                            <div class="action-wrapper">
                                <a href="tel:+91-8679677152" class="quote-btn">
                                    Know More
                                </a>
                            </div>
                            <div class="action-wrapper">
                                <a href="javascript:void(0)" class="quote-btn open-quote-modal"
                                    id="enquire-<?= $pkg['id']; ?>"
                                    data-package="<?= htmlspecialchars($pkg['package-title']); ?>"
                                    data-duration="<?= htmlspecialchars($pkg['package-duration']); ?>">
                                    Enquire <i class="fa-solid fa-arrow-right-long ms-1"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <?php endforeach; ?>
            </div>

        </div>
    </section>

    <!-- === about section === -->
    <section class="about-section" id="about">
        <div class="container">
            <div class="section-heading">
                <span class="section-tag">About Char Dham Yatra</span>
                <h3 class="title">Embark on a Sacred Pilgrimage to Uttarakhand</h3>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <p>
                        Nestled in the serene Garhwal region of the Himalayas, the <strong>Char Dham Yatra</strong> is
                        one of India's
                        most sacred spiritual journeys. Visiting the four holy shrines—Yamunotri, Gangotri, Kedarnath,
                        and Badrinath—is
                        believed to cleanse the soul and bring eternal peace.
                    </p>

                    <p>
                        Whether you are looking for a complete pilgrimage covering all four Dhams, a quick Do Dham Yatra
                        (Kedarnath & Badrinath),
                        or a luxury Char Dham journey by Helicopter, our carefully planned itineraries, comfortable
                        stays, and experienced
                        local drivers ensure a safe and smooth divine journey for you and your family.
                    </p>

                    <a href="#packages" class="about-btn">Explore Tour Packages</a>
                </div>

                <div class="about-image">
                    <img src="./images/destination/hero-banner.jpg" alt="Sacred Kedarnath Temple of Uttarakhand">
                </div>
            </div>
        </div>
    </section>

    <!-- ==== why choose us ==== -->
    <section class="why-us-section py-5" id="packages">
        <div class="container">

            <div class="section-heading text-center mb-5">
                <span>Why Choose Us</span>
                <h3 class="title">Why You Should Choose Us?</h2>
            </div>

            <div class="row align-items-center">

                <!-- Left -->
                <div class="col-lg-5">

                    <div class="why-box">
                        <div class="box-icon">
                            <i class="fa-solid fa-tags"></i>
                        </div>

                        <div class="box-content">
                            <h4>Affordable Pricing</h4>
                            <p>
                                Enjoy premium travel experiences at competitive prices
                                with no hidden charges.
                            </p>
                        </div>
                    </div>

                    <div class="why-box">
                        <div class="box-icon">
                            <i class="fa-solid fa-headset"></i>
                        </div>

                        <div class="box-content">
                            <h4>24/7 Travel Support</h4>
                            <p>
                                Our team is available before, during, and after your
                                journey for complete peace of mind.
                            </p>
                        </div>
                    </div>

                    <div class="why-box">
                        <div class="box-icon">
                            <i class="fa-solid fa-map-location-dot"></i>
                        </div>

                        <div class="box-content">
                            <h4>Local Travel Experts</h4>
                            <p>
                                Explore the sacred routes and hidden valleys guided
                                by Uttarakhand pilgrimage travel specialists.
                            </p>
                        </div>
                    </div>

                    <div class="why-box">
                        <div class="box-icon">
                            <i class="fa-solid fa-route"></i>
                        </div>

                        <div class="box-content">
                            <h4>Customized Tour Packages</h4>
                            <p>
                                Every itinerary is tailored to match your budget,
                                interests, and travel style.
                            </p>
                        </div>
                    </div>

                </div>

                <!-- Right -->
                <div class="col-lg-7 mt-5 mt-lg-0">

                    <div class="review-slider">

                        <div class="review-track">

                            <!-- Card -->
                            <div class="review-card">
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                                <p>
                                    The Char Dham journey was very smooth. The driver was highly experienced in mountain
                                    roads, and hotel stays were comfortable.
                                </p>

                                <div class="review-user">
                                    <img src="./images/icons/client.png">
                                    <div>
                                        <h5>Rahul Sharma</h5>
                                        <span>Delhi</span>
                                    </div>
                                </div>
                            </div>

                            <div class="review-card">
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                                <p>
                                    Our Do Dham Yatra (Kedarnath-Badrinath) was excellently planned. Special thanks for
                                    VIP Darshan assistance!
                                </p>

                                <div class="review-user">
                                    <img src="./images/icons/client.png">
                                    <div>
                                        <h5>Priya Mehta</h5>
                                        <span>Mumbai</span>
                                    </div>
                                </div>
                            </div>

                            <div class="review-card">
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                                <p>
                                    Booked Char Dham by Helicopter. Excellent service, premium hotels, and quick
                                    helicopter transfers. Fully satisfied!
                                </p>

                                <div class="review-user">
                                    <img src="./images/icons/client.png">
                                    <div>
                                        <h5>Amit Verma</h5>
                                        <span>Chandigarh</span>
                                    </div>
                                </div>
                            </div>

                            <div class="review-card">
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                                <p>
                                    A truly divine experience. The travel support team was available 24/7 during our
                                    trek to Kedarnath.
                                </p>

                                <div class="review-user">
                                    <img src="./images/icons/client.png">
                                    <div>
                                        <h5>Neha Kapoor</h5>
                                        <span>Jaipur</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </section>

    <!-- ==== footer ==== -->
    <footer class="footer">
        <div class="container">

            <div class="footer-top">

                <!-- About -->
                <div class="footer-column">
                    <a href="index.php"><img src="./images/icons/main-logo.webp" alt="samast travel" class="main-logo"></a>
                    <p>
                        Experience the divine spiritual journey of Char Dham Yatra in Uttarakhand. We offer carefully
                        crafted pilgrimage tour packages, comfortable accommodations, and safe transfers for a
                        hassle-free journey.
                    </p>
                </div>

                <!-- Quick Links -->
                <div class="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#packages">Tour Packages</a></li>
                    </ul>
                    <h4>Follow Us On:</h4>
                    <div class="social-links">
                        <a href="https://www.facebook.com/samasttravel" target="_blank" rel="noopener noreferrer"><i
                                class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/samasttravel/" target="_blank" rel="noopener noreferrer"><i
                                class="fab fa-instagram"></i></a>
                    </div>
                </div>

                <!-- Popular Destinations -->
                <div class="footer-column">
                    <h4>Popular Packages</h4>
                    <ul>
                        <li><a href="#complete-chardham-yatra">Char Dham Yatra</a></li>
                        <li><a href="#dodham-yatra">Do Dham Yatra</a></li>
                        <li><a href="#yamunotri-dham">Yamunotri Dham Tour</a></li>
                        <li><a href="#gangotri-dham">Gangotri Dham Tour</a></li>
                        <li><a href="#haridwar-rishikesh">Haridwar Rishikesh</a></li>
                    </ul>
                </div>

                <!-- Contact -->
                <div class="footer-column">
                    <h4>Contact Info</h4>

                    <ul class="contact-info">
                        <li>
                            <span><i class="fas fa-map-marker-alt"></i></span>
                            <span>Krishna Niwas, Near SVM School, Vikasnagar, Shimla 171009</span>
                        </li>

                        <li>
                            <span><i class="fas fa-phone"></i></span>
                            <a href="tel:+91-8679677152">
                                <span>+91-8679677152</span>
                            </a>
                        </li>

                        <li>
                            <span><i class="fas fa-envelope"></i></span>
                            <a href="mailto:info@samasttravel.com">
                                <span>info@samasttravel.com</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div class="footer-trust-bar">
                <div class="payment-icons">
                    <img src="./images/icons/visa.webp" alt="Visa" class="payment-img">
                    <img src="./images/icons/mastercard.webp" alt="Mastercard" class="payment-img">
                    <img src="./images/icons/rupay.webp" alt="Rupay" class="payment-img">
                    <img src="./images/icons/paypal.webp" alt="PayPal" class="payment-img">
                    <img src="./images/icons/maestro.webp" alt="Maestro" class="payment-img">
                </div>
            </div>

            <div class="footer-bottom">
                <p>
                    © 2026 <strong>Samast Travel | Char Dham Yatra</strong>. All Rights Reserved.
                </p>

                <p>
                    <a href="https://gashwatechnologies.com/" target="_blank" rel="noopener noreferrer"><img
                            src="./images/icons/gt-logo.gif" alt="gashwa technologies" class="gt-logo"></a>
                </p>
            </div>

        </div>
    </footer>

    <!-- sticky buttons -->
    <div class="quote-btn-sticky">
        <a href="javascript:void(0)" class="open-quote-modal">
            Get Free Quote
        </a>
    </div>

    <div class="whatsapp">
        <a
            href="https://wa.me/918679677152?text=Hi%20Samast%20Travel!%20I%20want%20to%20plan%20a%20trip.%20Please%20share%20details.">
            <img src="./images/icons/whatsapp.webp" alt="whatsapp">
        </a>
    </div>

    <div class="call">
        <a href="tel:+91-8679677152">
            <img src="./images/icons/phone-call.png" alt="phone-call">
        </a>
    </div>

    <!-- ===== Enquiry Modal ===== -->
    <div class="eq-overlay" id="enquiryOverlay" role="dialog" aria-modal="true" aria-labelledby="modalPackageName">
        <div class="eq-modal">

            <!-- Close -->
            <button class="eq-close" id="closeModal" aria-label="Close">
                <i class="fa-solid fa-xmark"></i>
            </button>

            <!-- Header -->
            <div class="eq-header">
                <span class="eq-badge">Get Your Free Quote</span>
                <h2 class="eq-title" id="modalPackageName">Enquire Now</h2>
                <p class="eq-subtitle" id="modalDuration"></p>
            </div>

            <!-- Form -->
            <form class="eq-form" action="mail.php" method="POST" id="enquiryForm">
                <input type="hidden" name="package" id="modalPackageInput">

                <div class="input-group">
                    <span class="input-group-text">
                        <i class="fa-solid fa-user"></i>
                    </span>
                    <input type="text" class="form-control" id="eq-name" name="name" placeholder="Your Name" required>
                </div>

                <div class="input-group">
                    <span class="input-group-text">
                        <i class="fa-solid fa-envelope"></i>
                    </span>
                    <input type="email" class="form-control" id="eq-email" name="email" placeholder="Email Address"
                        required>
                </div>

                <div class="input-group">
                    <span class="input-group-text">
                        <i class="fa-solid fa-phone"></i>
                    </span>
                    <input type="tel" class="form-control" id="eq-phone" name="phone" placeholder="Your Number"
                        required>
                </div>

                <div class="input-group">
                    <span class="input-group-text">
                        <i class="fa-solid fa-city"></i>
                    </span>
                    <input type="text" class="form-control" id="eq-city" name="city" placeholder="Your City" required>
                </div>

                <div class="input-group">
                    <span class="input-group-text">
                        <i class="fa-solid fa-location-dot"></i>
                    </span>
                    <select class="form-select" id="eq-destination" name="package" required>
                        <option value="" selected disabled>Select Package</option>
                        <option value="Complete Char Dham Yatra Package">Complete Char Dham
                            Yatra</option>
                        <option value="Do Dham Yatra (Kedarnath & Badrinath)">Do Dham Yatra
                            (Kedarnath & Badrinath)</option>
                        <option value="Kedarnath Dham Yatra">Kedarnath Dham Yatra</option>
                        <option value="Yamunotri Dham Tour From Haridwar">Yamunotri Dham Tour
                        </option>
                        <option value="Gangotri Dham Tour From Haridwar">Gangotri Dham Tour
                        </option>
                        <option value="Haridwar Rishikesh Spitritual Tour">Haridwar Rishikesh Spitritual Tour</option>
                    </select>
                </div>

                <button type="submit" class="eq-submit">
                    <i class="fa-solid fa-paper-plane me-1"></i> Book Now
                </button>

                <p class="eq-note">✅ No spam. We'll call you within 30 minutes.</p>
            </form>

        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <script src="js/main.js"></script>
</body>

</html>