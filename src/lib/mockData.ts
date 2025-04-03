
export interface Concert {
  id: number;
  title: string;
  artist: string;
  venue: string;
  date: string;
  time: string;
  description: string;
  imageUrl: string;
  price: {
    regular: number;
    vip: number;
  };
  featured: boolean;
}

export interface Artist {
  id: number;
  name: string;
  bio: string;
  imageUrl: string;
  socialMedia: {
    instagram?: string;
    twitter?: string;
    spotify?: string;
  };
  upcoming: number[];
  past: number[];
}

export const concerts: Concert[] = [
  {
    id: 1,
    title: "Summer Beats Festival",
    artist: "Multiple Artists",
    venue: "Starlite Arena",
    date: "2025-06-15",
    time: "18:00",
    description: "The biggest summer music festival featuring top artists from around the world. Experience an unforgettable night of music, lights, and energy.",
    imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: {
      regular: 89.99,
      vip: 199.99
    },
    featured: true
  },
  {
    id: 2,
    title: "Neon Nights Tour",
    artist: "Ellie Richards",
    venue: "Metro Concert Hall",
    date: "2025-05-22",
    time: "20:00",
    description: "Platinum-selling artist Ellie Richards brings her electrifying Neon Nights Tour to your city, featuring all her hit singles and new album tracks.",
    imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: {
      regular: 59.99,
      vip: 149.99
    },
    featured: true
  },
  {
    id: 3,
    title: "Symphony Under the Stars",
    artist: "City Philharmonic",
    venue: "Riverside Park",
    date: "2025-07-10",
    time: "19:30",
    description: "A magical evening of classical masterpieces performed under the open sky. Bring a blanket and enjoy the Symphony's renditions of timeless classics.",
    imageUrl: "https://images.unsplash.com/photo-1574791329739-115e432fb651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    price: {
      regular: 39.99,
      vip: 89.99
    },
    featured: false
  },
  {
    id: 4,
    title: "Rock Revolution",
    artist: "The Amplifiers",
    venue: "Power Stadium",
    date: "2025-08-05",
    time: "21:00",
    description: "Get ready for the loudest night of the year as The Amplifiers take the stage with their raw, energetic rock music that will leave you wanting more.",
    imageUrl: "https://images.unsplash.com/photo-1569698301238-5949fdcb6dfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=626&q=80",
    price: {
      regular: 49.99,
      vip: 129.99
    },
    featured: false
  },
  {
    id: 5,
    title: "Jazz & Blues Night",
    artist: "The Smooth Quartet",
    venue: "Blue Note Club",
    date: "2025-06-30",
    time: "19:00",
    description: "An intimate evening of soulful jazz and blues music in one of the city's most iconic venues. Perfect for jazz enthusiasts and newcomers alike.",
    imageUrl: "https://images.unsplash.com/photo-1533305789722-9ac5b4f71a95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: {
      regular: 45.99,
      vip: 99.99
    },
    featured: false
  },
  {
    id: 6,
    title: "Electronic Dreams Festival",
    artist: "Various DJs",
    venue: "Pulse Warehouse",
    date: "2025-09-12",
    time: "22:00",
    description: "The ultimate electronic music experience featuring world-class DJs, cutting-edge visuals, and an atmosphere that will keep you dancing all night.",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: {
      regular: 69.99,
      vip: 179.99
    },
    featured: true
  }
];

export const artists: Artist[] = [
  {
    id: 1,
    name: "Ellie Richards",
    bio: "Grammy-winning pop sensation known for her powerful vocals and energetic performances. With three platinum albums under her belt, Ellie continues to push boundaries in the music industry.",
    imageUrl: "https://images.unsplash.com/photo-1535942761441-f26baa0ea396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    socialMedia: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      spotify: "https://spotify.com"
    },
    upcoming: [2],
    past: [3, 5]
  },
  {
    id: 2,
    name: "The Amplifiers",
    bio: "A four-piece rock band known for their raw sound and electrifying live performances. Since forming in 2015, they've released two critically acclaimed albums and toured extensively.",
    imageUrl: "https://images.unsplash.com/photo-1561489404-42f13a2f09a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    socialMedia: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      spotify: "https://spotify.com"
    },
    upcoming: [4],
    past: [1, 6]
  },
  {
    id: 3,
    name: "The Smooth Quartet",
    bio: "This acclaimed jazz ensemble brings together four virtuoso musicians who blend traditional jazz elements with contemporary influences, creating a unique sound that's both familiar and fresh.",
    imageUrl: "https://images.unsplash.com/photo-1622462503174-827424d713fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    socialMedia: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    },
    upcoming: [5],
    past: [3]
  }
];
