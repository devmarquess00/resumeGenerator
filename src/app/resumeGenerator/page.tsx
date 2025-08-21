import { Header } from "@/components/header";
import { VisualationResume } from "@/components/visualationResume";
import { ScreenResume } from "@/screens/screenResume";

export default function ResumeGenerator () {
    return (
        <div>
            <Header />
            <ScreenResume />
            <VisualationResume />
        </div>
    )
}