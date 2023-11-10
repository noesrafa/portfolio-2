import Styles from "./Nav.module.scss"

const Nav = ({category, setCategory}) => {
  return (
    <nav className={Styles.nav}>
        <ul>
          <li>
            <button
              className={category === "cases" ? Styles.active : Styles.inactive}
              onClick={() => {
                setCategory("cases");
              }}
            >
              Cases
            </button>
          </li>
          <li>
            <button
              className={category === "about" ? Styles.active : Styles.inactive}
              onClick={() => {
                setCategory("about");
              }}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={category === "contact" ? Styles.active : Styles.inactive}
              onClick={() => {
                setCategory("contact");
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
  )
}

export default Nav