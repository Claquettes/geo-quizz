import toast from "react-hot-toast";

export function createToast(status: string) {
  const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px

  toast(
    status === "success" ? "Correct!" : "Wrong!",
    {
      position: "bottom-left",
      duration: status === "success" ? 1000 : 3000,
      icon: status === "success" ? "✅" : "😢",
      style: {
        fontSize: isMobile ? "1rem" : "1.5rem", // Use a smaller font size on mobile devices
        borderRadius: "10px",
        background: status === "success" ? "#4caf50" : "#f44336",
        minWidth: isMobile ? "5rem" : "20rem", // Use a smaller minimum width on mobile devices
        minHeight: isMobile ? "1rem" : "3rem", // Use a smaller minimum height on mobile devices
        color: "#fff",
      },
    }
  );
}