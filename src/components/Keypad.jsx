import Button from "./Button"

const Keypad = (props) => {

    const buttonText = [
        {
          key: 1,
          symbols: [".", ",", "!"]
        },
        { key: 2,
          symbols: ['a', 'b', 'c']
        },
        {
          key: 3,
          symbols: ['d', 'e', 'f']
        },
        {
          key: 4,
          symbols: ['g', 'h', 'i']
        },
        {
          key: 5,
          symbols : ['j', 'k', 'l']
        },
        {
          key: 6,
          symbols: ['m', 'n', 'o']
        },
        {
          key: 7,
          symbols: ['p', 'q', 'r', 's']
        },
        {
          key: 8,
          symbols: ['t', 'u', 'v']
        },
        {
          key: 9,
          symbols: ['w', 'x', 'y', 'z']
        },
        {
          key: '',
          symbols: ["*"]
        },
        {
          key: 0,
          symbols: [" "]
        },
        {
          key: '',
          symbols: ["#"]
        },
      ];

    return (
        <div className="grid grid-cols-3 gap-2 place-items-center sm:w-96">
            {
                buttonText.map((item, key) => (
                    <Button setText={props.setText} content={item} key={key} />
                ))
            }
        </div>
    )
}

export default Keypad
