import toast from "react-hot-toast";

export function createToast(status: string) {
  toast(
    status === "success" ? "Correct!" : "Wrong!",
    {
      position: "bottom-left",
      duration: status === "success" ? 1000 : 3000,

      icon: status === "success" ? "✅" : "😢",
      style: {
        fontSize: "1.5rem",
        borderRadius: "10px",
        background: status === "success" ? "#4caf50" : "#f44336",
        minWidth: "20rem",
        minHeight: "3rem",
        color: "#fff",
      },
    }
  );
}