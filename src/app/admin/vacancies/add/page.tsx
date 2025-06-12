export default function VacanciesAddPage() {
    return (
        <div>
            <header>
                <h1>Новая вакансия</h1>
            </header>
            <form>
                <section>
                    <header>Основная информация</header>
                    <label>
                        <span>
                            Название
                        </span>
                        <input type="text" name=""/>
                    </label>
                </section>
                <input type="submit" value={"Сохранить"}/>
            </form>
        </div>
    )
}
