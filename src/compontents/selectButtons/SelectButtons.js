import {useState} from 'react'
import {Dropdown} from 'react-bootstrap'

const SelectButtons = ({data, defaulValue, onChangeValue, defaultTitle}) => {

    const [value, setValue] = useState(defaulValue);
    const [title, setTitle] = useState(defaultTitle);

    const onChangeSelect = (event) => {
        setValue(event.target.getAttribute('value'))
        setTitle(event.target.getAttribute('title'))
        onChangeValue(event.target.getAttribute('value'))
    }

    const selectItems = data.map((item, i) => {
            return (
                <Dropdown.Item
                    onClick={(event) => {
                        onChangeSelect(event)
                    }}
                    key={item.title}
                    value={item.value}
                    title={item.title}>
                    {item.title}
                </Dropdown.Item>
            )
        }
    )
    return (
        <Dropdown style={{
            width: '100%'
        }}>
            <Dropdown.Toggle variant="dark"
                             style={{
                                 width: '100%'
                             }}>

                {title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {selectItems}
            </Dropdown.Menu>
        </Dropdown>
    )
}


export default SelectButtons;