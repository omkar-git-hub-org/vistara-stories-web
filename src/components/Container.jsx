export default function Container({ children, className = "" }) {
  return <div className={`max-w-[1440px] mx-auto w-full ${className}`}>{children}</div>;
}