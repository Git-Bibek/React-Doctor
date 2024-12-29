interface ContactFieldProps {
    icon: JSX.Element;
    text: string;
    link?: string;
}

export const ContactField = ({icon, text, link}: ContactFieldProps) => (
    <div className="flex items-center space-x-3">
        {icon}
        <p className="text-lg text-gray-700">
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                    {text}
                </a>
            ) : (
                text
            )}
        </p>
    </div>
);

