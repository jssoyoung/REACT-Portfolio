import resume from "../Assets/Jessica_Yun_Resume2024.pdf"
export default function Resume() {
    return(
    <div className="w-100" class="pdf">
        <object aria-label="pdf resume" data={resume} type="application/pdf" />
    </div>
    )
}