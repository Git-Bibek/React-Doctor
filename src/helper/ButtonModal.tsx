import Swal from "sweetalert2";

export const deleteModal = async (): Promise<boolean> => {
    return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            return Swal.fire({
                title: "Deleted!",
                text: "The item has been deleted.",
                icon: "success"
            }).then(() => true);
        } else {
            return false;
        }
    });
}
