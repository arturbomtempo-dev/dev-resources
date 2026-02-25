import Image from 'next/image';

export function ProjectCard() {
    return (
        <div className="flex max-w-md min-w-70 flex-col gap-4 rounded-lg border border-neutral-200 p-5">
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                    src="https://private-user-images.githubusercontent.com/96635074/519937059-208932f4-4060-49f7-9bb7-f4d3247f0d78.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzIwMjI5MTcsIm5iZiI6MTc3MjAyMjYxNywicGF0aCI6Ii85NjYzNTA3NC81MTk5MzcwNTktMjA4OTMyZjQtNDA2MC00OWY3LTliYjctZjRkMzI0N2YwZDc4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAyMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMjI1VDEyMzAxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTlmYzBlYmQwM2I2M2I0YWFlNDQwZmQ5NTBmNWVkN2Q5Mzc1ODA5YjEyMTZjMjJiZjg5NDdhZTk1NDVhY2I0N2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.haJiMxOaJmF3e_wr_wEWgJE4YCZIyEF_rb9JsWXeobg"
                    alt="Imagem do projeto"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="font-family-manrope text-base font-bold">DevResources</h3>
                <p className="text-sm font-normal">
                    Plataforma web colaborativa de curadoria digital e portfólio de projetos.
                </p>
            </div>
        </div>
    );
}
