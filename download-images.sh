#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download hero images
curl -o public/images/hero-bg.jpg "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
curl -o public/images/about-header.jpg "https://images.unsplash.com/photo-1561729098-cbf2f5240720?auto=format&fit=crop&q=80"
curl -o public/images/services-header.jpg "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
curl -o public/images/contact-header.jpg "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&q=80"
curl -o public/images/cta-bg.jpg "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"

# Download service thumbnails
curl -o public/images/wedding.jpg "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80"
curl -o public/images/corporate.jpg "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80"
curl -o public/images/custom.jpg "https://images.unsplash.com/photo-1531120364508-a6b656c3e78d?auto=format&fit=crop&q=80"

# Download service detail images
curl -o public/images/wedding-service.jpg "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
curl -o public/images/corporate-service.jpg "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80"
curl -o public/images/party-service.jpg "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80"
curl -o public/images/custom-service.jpg "https://images.unsplash.com/photo-1484900761117-3519e6e23b5d?auto=format&fit=crop&q=80"

# Download team & story images
curl -o public/images/our-story.jpg "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?auto=format&fit=crop&q=80"
curl -o public/images/team-1.jpg "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
curl -o public/images/team-2.jpg "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
curl -o public/images/team-3.jpg "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"

echo "All images have been downloaded to the public/images directory."