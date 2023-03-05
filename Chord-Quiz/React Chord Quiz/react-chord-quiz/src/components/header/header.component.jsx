import './header.styles.css'

const Header = ({reload}) => {

    return (
        <header>
            <div id="void">
                <p onClick={reload}>Chord Generator</p>
                {/* Zufallsgenerator*/}
            </div>
        </header>
    );
}

export { Header };