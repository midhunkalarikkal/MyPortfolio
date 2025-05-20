import { toast } from "react-toastify";
import { handleSubmitInterface } from "./interface";

export const handleSubmit = async ({
    e,
    inputValue,
    textAreaValue,
    setInputValue,
    setTextAreaValue,
    contactFormOpen,
    closeConnectForm,
    setOpenForm,
    setLoading
}: handleSubmitInterface
) => {
    e.preventDefault();
    setLoading(true);

    if (!inputValue || !textAreaValue) {
        toast.error('Please fill out all fields');
        setLoading(false);
        return;
    }

    try {
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: inputValue,
                message: textAreaValue,
            }),
        });

        const data = await response.json();

        if (data.success) {
            toast.success(data.message || 'Email sent successfully!');
            setLoading(false);
            setInputValue('');
            setTextAreaValue('');
            if (contactFormOpen) closeConnectForm();
            else setOpenForm(false);
        } else {
            toast.error(data.message || 'Failed to send email.');
            setLoading(false);
        }
    } catch (err) {
        console.error('Error submitting form:', err);
        toast.error('Something went wrong. Please try again later.');
    }
};