
interface Props {
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  slug: string;
}

export default async function MealCard({ name, price, category, description, image, slug }: Props) {
  return (
    <a href={`/menu/${slug}`} className="meal-card">
      {/* Image Container */}
      <div className="card-image-wrapper">
        <img style={{viewTransitionName: `${slug}-image`}} src={image} alt={name} className="card-image" />
        <div className="card-overlay" />

        {/* Category Badge */}
        <span className="category-badge">{category}</span>

        {/* Price Overlay on Hover */}
        <div className="price-overlay">
          <p className="price-amount">${price}</p>
          <p className="price-label">View Details</p>
        </div>
      </div>

      {/* Content */}
      <div className="card-content">
        <h3 style={{viewTransitionName: `${slug}-title`}} className="card-title">{name}</h3>
        <p style={{viewTransitionName: `${slug}-description`}} className="card-description">{description}</p>
        <div className="card-footer">
          <span style={{viewTransitionName: `${slug}-price`}} className="card-price">${price}</span>
          <span className="card-category">{category}</span>
        </div>
      </div>

      <style>{`
        .meal-card {
          display: block;
          width: min(400px, 100%);
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          border-radius: 0.75rem;
          overflow: hidden;
          background: #111;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .meal-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5);
        }

        .card-image-wrapper {
          position: relative;
          height: 16rem;
          overflow: hidden;
        }

        .card-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .meal-card:hover .card-image {
          transform: scale(1.1);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          transition: background 0.3s ease;
        }
        .meal-card:hover .card-overlay {
          background: rgba(0, 0, 0, 0.55);
        }

        .category-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.25rem 0.75rem;
          background: rgba(212, 175, 55, 0.9);
          color: #1a1a1a;
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: 9999px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .price-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          text-align: center;
        }
        .meal-card:hover .price-overlay {
          opacity: 1;
        }

        .price-amount {
          font-family: var(--font-playfair, serif);
          font-size: 2.5rem;
          font-weight: 700;
          color: #d4af37;
          margin: 0;
        }
        .price-label {
          color: #fff;
          font-size: 0.875rem;
          margin: 0.5rem 0 0;
        }

        .card-content {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .card-title {
          font-family: var(--font-playfair, serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
          transition: color 0.2s ease;
          text-align: left;
          text-transform: capitalize;
        }
        .meal-card:hover .card-title {
          color: #d4af37;
        }

        .card-description {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.55);
          margin: 0;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-align: left;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.5rem;
        }

        .card-price {
          font-size: 1.125rem;
          font-weight: 600;
          color: #d4af37;
        }

        .card-category {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
      `}</style>
    </a>
  );
}