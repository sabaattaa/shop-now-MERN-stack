export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={``}>
      {children}

      <div
        style={{
          display: "flex",
          padding: "10px",
          border: "1px solid #f2f2f3",
          color: "#f2f2f3",
          fontWeight: "900",
          justifyContent: "center",
          textShadow: "0px 2px 4px  black",
          fontSize: "30px",
        }}
      >
        Created By SABA ATTA MUHAMMAD
      </div>
    </div>
  );
}
