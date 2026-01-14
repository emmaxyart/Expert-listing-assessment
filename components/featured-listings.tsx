import Image from "next/image"

interface ListingCard {
  title: string
  subtitle: string
  label: string
  image: string
}

export function FeaturedListings() {
  const listings: ListingCard[] = [
    {
      title: "Urban Prime Plaza Premiere",
      subtitle: "MOST CLICKED",
      label: "MOST CLICKED",
      image: "https://images.unsplash.com/photo-1545321554-de2ee4f3e26b?w=500&h=400&fit=crop",
    },
    {
      title: "Urban Prime Plaza Premiere",
      subtitle: "MOST WATCHLISTED",
      label: "MOST WATCHLISTED",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop",
    },
    {
      title: "Urban Prime Plaza Premiere",
      subtitle: "HOTTEST LISTING",
      label: "HOTTEST LISTING",
      image: "https://images.unsplash.com/photo-1551632233-ee243bbb47b0?w=500&h=400&fit=crop",
    },
  ]

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing, index) => (
          <div key={index} className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
            <Image
              src={listing.image || "/placeholder.svg"}
              alt={listing.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Label */}
            <div className="absolute top-4 left-4">
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                {listing.label}
              </span>
            </div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white text-xs font-semibold mb-1">{listing.subtitle}</p>
              <h3 className="text-white text-xl font-bold">{listing.title}</h3>

              <div className="flex gap-2 mt-4">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                <span className="w-2 h-2 bg-white/50 rounded-full"></span>
              </div>
            </div>

            {/* Chat Icon */}
            <button className="absolute bottom-4 right-4 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
