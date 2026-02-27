import { useState } from "react";

export const AddCategory = ({ onNewCategory }: { onNewCategory: (value: string) => void }) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({ target }: any) => {
        setInputValue(target.value);
    }
    const onSubmit = (event: any) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <label>Input:</label>
            <input type="text" placeholder="Buscar images" value={inputValue}
                onChange={onInputChange} />
        </form>
    )
}