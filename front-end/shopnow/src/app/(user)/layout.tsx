export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div
    style={{
      height: "100%",
      width:"100%"
  }}
  
    className={`blue`}>{children}</div>;
}
