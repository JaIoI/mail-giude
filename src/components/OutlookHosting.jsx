import {Notice} from "./Notice.jsx";

export const OutlookHosting = () => {
	return (
		<>
			<h2 className="text-3xl font-bold mb-5">Hosting</h2>
			<ol className="list-decimal pl-6">
				<li className="mb-6">
					<p className="mb-2">Откройте Microsoft Outlook и перейдите в раздел "Файл".</p>
					<img src="/images/OUTLOOK_1.jpg" alt="перейдите в раздел 'Файл'"/>
				</li>
				<li className="mb-6">
					<p className="mb-2">Нажмите на "Добавить учетную запись".</p>
					<img src="/images/OUTLOOK_2.jpg" alt="Добавить учетную запись"/>
				</li>
				<li className="mb-6">
					<p className="mb-2">Введите адрес электронной почты.
						Для дополнительных настроек нужно поставиль галочку "Настроить учетную запись вручную" Нажмите
						подключить.</p>
					<img src="/images/OUTLOOK_3.jpg" alt="адрес электронной почты"/>
				</li>
				<li className="mb-6">
					<p className="mb-2">Выберите тип протокола POP3 или IMAP.</p>
					<Notice>
						Основное различие между учетными записями POP3 и IMAP заключается в способе хранения и доступа к сообщениям.
						POP3 загружает email-сообщения на компьютер или устройство пользователя,
						IMAP позволяет получать доступ к сообщениям непосредственно на сервере электронной почты.
					</Notice>
					<h3 className="text-xl mb-2">Для IMAP:</h3>
					<img src="/images/OUTLOOK_4_imap.jpg" alt="тип протокола IMAP"/>
					<h3 className="text-xl mb-2 mt-4">Для POP3:</h3>
					<img src="/images/OUTLOOK_4_pop.jpg" alt="тип протокола POP3"/>
				</li>
				<li className="mb-6">
					<p className="mb-2">Введите пароль</p>
					<img src="/images/OUTLOOK_5_pass.jpg" alt="Введите пароль"/>
				</li>
				<li className="mb-6">
					<p className="mb-2">Учетная запись успешно добавлена! Нажмите готово.</p>
					<h3 className="text-xl mb-2">Для IMAP:</h3>
					<img src="/images/OUTLOOK_6_imap_finish.jpg" alt="IMAP успешно добавлена"/>
					<h3 className="text-xl mb-2 mt-4">Для POP3:</h3>
					<img src="/images/OUTLOOK_6_pop_finish.jpg" alt="POP3 успешно добавлена"/>
				</li>
			</ol>
		</>
	)
}