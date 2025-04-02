import axiosInstance from "./../../axios";

const apiReconcile = async (finalData) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axiosInstance.post(
            "/reconciliation/reconcile",
            finalData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default apiReconcile;
