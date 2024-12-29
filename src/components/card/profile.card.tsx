import {ImageOnlyCard} from "./card.component.tsx";
import {doctors} from "../../assets/images/assets.ts";
import {ContactField} from "../form/display.form.tsx";
import {FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaMapMarkerAlt, FaPhone} from "react-icons/fa";

const ProfileCard = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl text-center font-semibold text-gray-800 mb-4">
                    Profile Page
                </h1>
                <p className="text-center text-lg text-gray-600 mb-6">
                    Welcome to your profile page. You can update your profile information here.
                </p>

                {/* Profile Details */}
                <div className="flex flex-col items-center">
                    {/* Profile Image */}
                    <div
                        className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                        <ImageOnlyCard image={doctors[0].image}/>
                    </div>


                    <p className="text-3xl font-medium text-gray-800 mt-5">
                        Edward Vincent
                    </p>

                    <hr className="w-full mt-6 mb-6 border-gray-300"/>

                    {/* Contact Information */}
                    <div className="w-full flex flex-col items-start space-y-4">
                        <h3 className="text-2xl text-gray-800 font-semibold mb-4">
                            Contact Information
                        </h3>

                        <ContactField
                            icon={<FaEnvelope className="text-gray-600"/>}
                            text="EwBqy@example.com"
                        />
                        <ContactField
                            icon={<FaPhone className="text-gray-600"/>}
                            text="+1 234 567 890"
                        />
                        <ContactField
                            icon={<FaMapMarkerAlt className="text-gray-600"/>}
                            text="123 Main Street, City, Country"
                        />
                        <ContactField
                            icon={<FaGlobe className="text-gray-600"/>}
                            text="www.edwardvincent.com"
                            link="https://edwardvincent.com"
                        />
                        <ContactField
                            icon={<FaLinkedin className="text-blue-700"/>}
                            text="linkedin.com/in/edwardvincent"
                            link="https://linkedin.com/in/edwardvincent"
                        />
                        <ContactField
                            icon={<FaGithub className="text-gray-800"/>}
                            text="github.com/edwardvincent"
                            link="https://github.com/edwardvincent"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 mt-8">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded transition duration-300">
                            Edit
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded transition duration-300">
                            Delete
                        </button>
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded transition duration-300">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard