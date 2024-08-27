import { useState } from 'react';

const ToggleSwitch = ({ label, onChange }) => {
    const [enabled, setEnabled] = useState(false);

    const toggleSwitch = () => {
        setEnabled(!enabled);
        onChange(!enabled);
    };

    return (
        <div className="flex items-center">
            <span className="mr-2 text-sm font-medium text-gray-700">{label}</span>
            <div
                className={`relative inline-flex items-center h-3 rounded-full w-6 cursor-pointer transition-colors duration-300 ${enabled ? 'border-primary-500' : 'border-gray-300'}`}
                style={{
                    borderWidth: '2px',
                }}
                onClick={toggleSwitch}
            >
                <span
                     className={`inline-block w-2 h-2 transform rounded-full transition-transform duration-300 ${enabled ? 'bg-primary-500 translate-x-3' : 'bg-gray-300 translate-x-0'}`}
                />
                
            </div>
            <span className={'text-xs ml-2'}>Recordar contraseña</span>
        </div>
    );
};

export default ToggleSwitch;
