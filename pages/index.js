import { Navbar } from '../components'
import Button from '../components/Button'
function LandingPage() {
    return (
        <div className="landing-container">
            <Navbar />
            <h3>Hello Kodizim</h3>
            <Button />
            <Button active />
        </div>
    )
}
export default LandingPage
