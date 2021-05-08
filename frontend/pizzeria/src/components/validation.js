const validation = (values) => {
    let errors = {};
    if (!values.name) {
        errors.name = "Name is required";
    } else if (values.name.length < 3) {
        errors.name = "Please type your full name";
    }
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
    }
    if (!values.number) {
        errors.number = "Please add a guest number";
    } else if (values.number <= 0) {
        errors.number = "Please add a proper guest number";
    }

    let today = new Date().toISOString().slice(0, 10);
    if (!values.date) {
        errors.date = "Date is required";
    } else if (values.date < today) {
        errors.date = "Please choose a proper date";
    }

    if (!values.time) {
        errors.time = "Time is required";
    }

    /*to get the current date in format "2018-08-03": let today = new Date().toISOString().slice(0, 10)
         or
         let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
         or in format "8/3/2018": let today = new Date().toLocaleDateString()
         */
    return errors;
};
export default validation;