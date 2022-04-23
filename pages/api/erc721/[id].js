const metadata = {
    1: {
      attributes: [
        {
          trait_type: "Shape",
          value: "Unbalanced",
        },
        {
          trait_type: "Type",
          value: "Sculpture",
        },
      ],
      description: "Unbalanced sculpture by Vika Wendish",
      image: "https://images.unsplash.com/photo-1592859372969-7ce244fb6582",
      name: "Unbalanced sculpture",
    },
    2: {
      attributes: [
        {
          trait_type: "Shape",
          value: "Balanced",
        },
        {
          trait_type: "Type",
          value: "Sculpture",
        },
      ],
      description: "Balanced Clay Flower by Vika Wendish",
      image: "https://images.unsplash.com/photo-1577703691096-6de1c5c3fa85",
      name: "Totally Balanced",
    },
    3: {
      attributes: [
        {
          trait_type: "Shape",
          value: "Balanced",
        },
        {
          trait_type: "Type",
          value: "Sculpture",
        },
      ],
      description: "Balanced Orange by Vika Wendish",
      image: "https://images.unsplash.com/photo-1577704994888-b3b1fb948507",
      name: "Balanced Orange",
    },
  };
  
  export default function handler(req, res) {
    res.status(200).json(metadata[req.query.id] || {});
  }