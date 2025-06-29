export default function ImgCard({ src, alt = "..." }) {
  return <img src={src} className="card-img-top" alt={alt}></img>;
}
