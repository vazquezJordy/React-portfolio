import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faTrashAlt,
    faSpinner,
    faPlus,
  } from "@fortawesome/free-solid-svg-icons";
  import { library } from "@fortawesome/fontawesome-svg-core";

  const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faTrashAlt, faSpinner, faPlus);
  };

  export default Icons;