export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-4 border-b text-center">Login Now and get 20% off</div>
      {children}
    </div>
  );
}
