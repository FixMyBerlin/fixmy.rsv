import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { LayoutArticle } from '~/components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { OptOut } from '~/components/CookieConsent/';
import { ExternalLink } from '~/components/Links';

const DatenschutzPage = () => {
  return (
    <LayoutArticle>
      <HelmetSeo
        noindex
        title="Datenschutz"
        description="Informationen über die Handhabung Ihrer Daten und rechtliche Hinweise zur Datenverarbeitung."
      />
      <h1>Datenschutz&shy;erklärung</h1>
      <h2 id="m14">Einleitung</h2>
      <p>
        Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
        aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch
        kurz als &ldquo;Daten&rdquo; bezeichnet) wir zu welchen Zwecken und in
        welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von
        uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im
        Rahmen der Erbringung unserer Leistungen als auch insbesondere auf
        unseren Webseiten, in mobilen Applikationen sowie innerhalb externer
        Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend
        zusammenfassend bezeichnet als &ldquo;Onlineangebot&rdquo;.
      </p>
      <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
      <p>Stand: 1. Februar 2022</p>
      <h2>Inhaltsübersicht</h2>{' '}
      <ul>
        <li>
          <a href="#m14">Einleitung</a>
        </li>
        <li>
          <a href="#m3">Verantwortlicher</a>
        </li>
        <li>
          <a href="#mOverview">Übersicht der Verarbeitungen</a>
        </li>
        <li>
          <a href="#m13">Maßgebliche Rechtsgrundlagen</a>
        </li>
        <li>
          <a href="#m27">Sicherheitsmaßnahmen</a>
        </li>
        <li>
          <a href="#m25">Übermittlung von personenbezogenen Daten</a>
        </li>
        <li>
          <a href="#m24">Datenverarbeitung in Drittländern</a>
        </li>
        <li>
          <a href="#m12">Löschung von Daten</a>
        </li>
        <li>
          <a href="#m225">Bereitstellung des Onlineangebotes und Webhosting</a>
        </li>
        <li>
          <a href="#m182">Kontakt- und Anfragenverwaltung</a>
        </li>
        <li>
          <a href="#m17">Newsletter und elektronische Benachrichtigungen</a>
        </li>
        <li>
          <a href="#m263">Webanalyse, Monitoring und Optimierung</a>
        </li>
        <li>
          <a href="#m15">
            Änderung und Aktualisierung der Datenschutzerklärung
          </a>
        </li>
        <li>
          <a href="#m10">Rechte der betroffenen Personen</a>
        </li>
        <li>
          <a href="#m42">Begriffsdefinitionen</a>
        </li>
        <li>
          <a href="#m54">Tracking Opt-Out (Matomo)</a>
        </li>
        <li>
          <a href="#m29">Datenschutzbestimmung (Maptiler)</a>
        </li>
      </ul>
      <h2 id="m3">Verantwortlicher</h2>
      <p>
        FixMyCity GmbH
        <br />
        Karlsgartenstraße 12
        <br />
        12049 Berlin
      </p>
      Vertretungsberechtigte Personen: <p>Boris Hekele und Heiko Rintelen</p>
      E-Mail-Adresse:{' '}
      <p>
        <a href="mailto:info@fixmycity.de">info@fixmycity.de</a>
      </p>
      Impressum:{' '}
      <p>
        <a
          href="https://www.fixmycity.de/impressum"
          target="_blank"
          rel="noreferrer"
        >
          https://www.fixmycity.de/impressum
        </a>
      </p>
      <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
      <p>
        Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und
        die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen
        Personen.
      </p>
      <h3>Arten der verarbeiteten Daten</h3>
      <ul>
        <li>Bestandsdaten.</li>
        <li>Kontaktdaten.</li>
        <li>Inhaltsdaten.</li>
        <li>Nutzungsdaten.</li>
        <li>Meta-/Kommunikationsdaten.</li>
      </ul>
      <h3>Kategorien betroffener Personen</h3>
      <ul>
        <li>Kommunikationspartner.</li>
        <li>Nutzer.</li>
      </ul>
      <h3>Zwecke der Verarbeitung</h3>
      <ul>
        <li>Erbringung vertraglicher Leistungen und Kundenservice.</li>
        <li>Kontaktanfragen und Kommunikation.</li>
        <li>Direktmarketing.</li>
        <li>Reichweitenmessung.</li>
        <li>Profile mit nutzerbezogenen Informationen.</li>
        <li>
          Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
        </li>
      </ul>
      <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3>
      <p>
        Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO,
        auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie
        zur Kenntnis, dass neben den Regelungen der DSGVO nationale
        Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten
        können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen
        maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
      </p>
      <ul>
        <li>
          <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO)</strong> - Die
          betroffene Person hat ihre Einwilligung in die Verarbeitung der sie
          betreffenden personenbezogenen Daten für einen spezifischen Zweck oder
          mehrere bestimmte Zwecke gegeben.
        </li>
        <li>
          <strong>
            Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
            lit. b. DSGVO)
          </strong>{' '}
          - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
          Vertragspartei die betroffene Person ist, oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
          betroffenen Person erfolgen.
        </li>
        <li>
          <strong>
            Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO)
          </strong>{' '}
          - Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung
          erforderlich, der der Verantwortliche unterliegt.
        </li>
        <li>
          <strong>
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)
          </strong>{' '}
          - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des
          Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
          Interessen oder Grundrechte und Grundfreiheiten der betroffenen
          Person, die den Schutz personenbezogener Daten erfordern, überwiegen.
        </li>
      </ul>
      <p>
        Zusätzlich zu den Datenschutzregelungen der Datenschutz-Grundverordnung
        gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu
        gehört insbesondere das Gesetz zum Schutz vor Missbrauch
        personenbezogener Daten bei der Datenverarbeitung
        (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere
        Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum
        Widerspruchsrecht, zur Verarbeitung besonderer Kategorien
        personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur
        Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall
        einschließlich Profiling. Des Weiteren regelt es die Datenverarbeitung
        für Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im
        Hinblick auf die Begründung, Durchführung oder Beendigung von
        Beschäftigungsverhältnissen sowie die Einwilligung von Beschäftigten.
        Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur
        Anwendung gelangen.
      </p>
      <h2 id="m27">Sicherheitsmaßnahmen</h2>
      <p>
        Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
        Berücksichtigung des Stands der Technik, der Implementierungskosten und
        der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie
        der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der
        Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete
        technische und organisatorische Maßnahmen, um ein dem Risiko
        angemessenes Schutzniveau zu gewährleisten.
      </p>
      <p>
        Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit,
        Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen
        und elektronischen Zugangs zu den Daten als auch des sie betreffenden
        Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit
        und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die
        eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und
        Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner
        berücksichtigen wir den Schutz personenbezogener Daten bereits bei der
        Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren
        entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und
        durch datenschutzfreundliche Voreinstellungen.
      </p>
      <h2 id="m25">Übermittlung von personenbezogenen Daten</h2>
      <p>
        Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor,
        dass die Daten an andere Stellen, Unternehmen, rechtlich selbstständige
        Organisationseinheiten oder Personen übermittelt oder sie ihnen
        gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z.B.
        mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und
        Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen
        Fall beachten wir die gesetzlichen Vorgaben und schließen insbesondere
        entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten
        dienen, mit den Empfängern Ihrer Daten ab.
      </p>
      <h2 id="m24">Datenverarbeitung in Drittländern</h2>
      <p>
        Sofern wir Daten in einem Drittland (d.h., außerhalb der Europäischen
        Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder
        die Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder
        der Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen
        oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit den
        gesetzlichen Vorgaben.{' '}
      </p>
      <p>
        Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder
        gesetzlich erforderlicher Übermittlung verarbeiten oder lassen wir die
        Daten nur in Drittländern mit einem anerkannten Datenschutzniveau,
        vertraglichen Verpflichtung durch sogenannte Standardschutzklauseln der
        EU-Kommission, beim Vorliegen von Zertifizierungen oder verbindlicher
        internen Datenschutzvorschriften verarbeiten (Art. 44 bis 49 DSGVO,
        Informationsseite der EU-Kommission:{' '}
        <a
          href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
          target="_blank"
          rel="noreferrer"
        >
          https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de
        </a>
        ).
      </p>
      <h2 id="m12">Löschung von Daten</h2>
      <p>
        Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen
        Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten
        Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen
        (z.B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder
        sie für den Zweck nicht erforderlich sind).
      </p>
      <p>
        Sofern die Daten nicht gelöscht werden, weil sie für andere und
        gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung
        auf diese Zwecke beschränkt. D.h., die Daten werden gesperrt und nicht
        für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels-
        oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren
        Speicherung zur Geltendmachung, Ausübung oder Verteidigung von
        Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen
        oder juristischen Person erforderlich ist.
      </p>
      <p>
        Unsere Datenschutzhinweise können ferner weitere Angaben zu der
        Aufbewahrung und Löschung von Daten beinhalten, die für die jeweiligen
        Verarbeitungen vorrangig gelten.
      </p>
      <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2>
      <p>
        Um unser Onlineangebot sicher und effizient bereitstellen zu können,
        nehmen wir die Leistungen von einem oder mehreren Webhosting-Anbietern
        in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern) das
        Onlineangebot abgerufen werden kann. Zu diesen Zwecken können wir
        Infrastruktur- und Plattformdienstleistungen, Rechenkapazität,
        Speicherplatz und Datenbankdienste sowie Sicherheitsleistungen und
        technische Wartungsleistungen in Anspruch nehmen.
      </p>
      <p>
        Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten
        Daten können alle die Nutzer unseres Onlineangebotes betreffenden
        Angaben gehören, die im Rahmen der Nutzung und der Kommunikation
        anfallen. Hierzu gehören regelmäßig die IP-Adresse, die notwendig ist,
        um die Inhalte von Onlineangeboten an Browser ausliefern zu können, und
        alle innerhalb unseres Onlineangebotes oder von Webseiten getätigten
        Eingaben.
      </p>
      <ul>
        <li>
          <strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (z.B. Eingaben
          in Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten,
          Interesse an Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten
          (z.B. Geräte-Informationen, IP-Adressen).
        </li>
        <li>
          <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher,
          Nutzer von Onlinediensten).
        </li>
        <li>
          <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
          Onlineangebotes und Nutzerfreundlichkeit.
        </li>
        <li>
          <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs.
          1 S. 1 lit. f. DSGVO).
        </li>
      </ul>
      <p>
        <strong>
          Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
        </strong>
      </p>
      <ul>
        <li>
          <strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Wir selbst
          (bzw. unser Webhostinganbieter) erheben Daten zu jedem Zugriff auf den
          Server (sogenannte Serverlogfiles). Zu den Serverlogfiles können die
          Adresse und Name der abgerufenen Webseiten und Dateien, Datum und
          Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über
          erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des
          Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall
          IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles
          können zum einen zu Zwecken der Sicherheit eingesetzt werden, z.B., um
          eine Überlastung der Server zu vermeiden (insbesondere im Fall von
          missbräuchlichen Angriffen, sogenannten DDoS-Attacken) und zum
          anderen, um die Auslastung der Server und ihre Stabilität
          sicherzustellen; <strong>Löschung von Daten:</strong>{' '}
          Logfile-Informationen werden für die Dauer von maximal 30 Tagen
          gespeichert und danach gelöscht oder anonymisiert. Daten, deren
          weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur
          endgültigen Klärung des jeweiligen Vorfalls von der Löschung
          ausgenommen.
        </li>
        <li>
          <strong>Amazon Web Services (AWS): </strong>Leistungen auf dem Gebiet
          der Bereitstellung von informationstechnischer Infrastruktur und
          verbundenen Dienstleistungen (z.B. Speicherplatz und/oder
          Rechenkapazitäten); <strong>Dienstanbieter:</strong> Amazon Web
          Services, Inc., 410 Terry Avenue North, Seattle WA 98109, USA;{' '}
          <strong>Website:</strong>{' '}
          <a href="https://aws.amazon.com/de/" target="_blank" rel="noreferrer">
            https://aws.amazon.com/de/
          </a>
          ; <strong>Datenschutzerklärung:</strong>{' '}
          <a
            href="https://aws.amazon.com/de/privacy/?nc1=f_pr"
            target="_blank"
            rel="noreferrer"
          >
            https://aws.amazon.com/de/privacy/?nc1=f_pr
          </a>
          ;{' '}
          <strong>
            Standardvertragsklauseln (Gewährleistung Datenschutzniveau bei
            Verarbeitung in Drittländern):
          </strong>{' '}
          <a
            href="https://aws.amazon.com/de/service-terms/"
            target="_blank"
            rel="noreferrer"
          >
            https://aws.amazon.com/de/service-terms/
          </a>
          ; <strong>Auftragsverarbeitungsvertrag:</strong>{' '}
          <a
            href="https://d1.awsstatic.com/legal/aws-gdpr/AWS_GDPR_DPA.pdf"
            target="_blank"
            rel="noreferrer"
          >
            https://d1.awsstatic.com/legal/aws-gdpr/AWS_GDPR_DPA.pdf
          </a>
          .
        </li>
      </ul>
      <h2 id="m182">Kontakt- und Anfragenverwaltung</h2>
      <p>
        Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail,
        Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und
        Geschäftsbeziehungen werden die Angaben der anfragenden Personen
        verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und
        etwaiger angefragter Maßnahmen erforderlich ist.
      </p>
      <p>
        Die Beantwortung der Kontaktanfragen sowie die Verwaltung von Kontakt-
        und Anfragedaten im Rahmen von vertraglichen oder vorvertraglichen
        Beziehungen erfolgt zur Erfüllung unserer vertraglichen Pflichten oder
        zur Beantwortung von (vor)vertraglichen Anfragen und im Übrigen auf
        Grundlage der berechtigten Interessen an der Beantwortung der Anfragen
        und Pflege von Nutzer- bzw. Geschäftsbeziehungen.
      </p>
      <ul>
        <li>
          <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen,
          Adressen); Kontaktdaten (z.B. E-Mail, Telefonnummern); Inhaltsdaten
          (z.B. Eingaben in Onlineformularen).
        </li>
        <li>
          <strong>Betroffene Personen:</strong> Kommunikationspartner.
        </li>
        <li>
          <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und
          Kommunikation; Erbringung vertraglicher Leistungen und Kundenservice.
        </li>
        <li>
          <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
          vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO);
          Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO); Rechtliche
          Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO).
        </li>
      </ul>
      <p>
        <strong>
          Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
        </strong>
      </p>
      <ul>
        <li>
          <strong>Kontaktformular: </strong>Wenn Nutzer über unser
          Kontaktformular, E-Mail oder andere Kommunikationswege mit uns in
          Kontakt treten, verarbeiten wir die uns in diesem Zusammenhang
          mitgeteilten Daten zur Bearbeitung des mitgeteilten Anliegens. Zu
          diesem Zweck verarbeiten wir personenbezogene Daten im Rahmen
          vorvertraglicher und vertraglicher Geschäftsbeziehungen, soweit dies
          zu deren Erfüllung erforderlich ist und im Übrigen auf Grundlage
          unserer berechtigten Interessen sowie der Interessen der
          Kommunikationspartner an der Beantwortung der Anliegen und unserer
          gesetzlichen Aufbewahrungspflichten.
        </li>
      </ul>
      <h2 id="m17">Newsletter und elektronische Benachrichtigungen</h2>
      <p>
        Wir versenden Newsletter, E-Mails und weitere elektronische
        Benachrichtigungen (nachfolgend &ldquo;Newsletter&rdquo; nur mit der
        Einwilligung der Empfänger oder einer gesetzlichen Erlaubnis. Sofern im
        Rahmen einer Anmeldung zum Newsletter dessen Inhalte konkret umschrieben
        werden, sind sie für die Einwilligung der Nutzer maßgeblich. Im Übrigen
        enthalten unsere Newsletter Informationen zu unseren Leistungen und uns.
      </p>
      <p>
        Um sich zu unseren Newslettern anzumelden, reicht es grundsätzlich aus,
        wenn Sie Ihre E-Mail-Adresse angeben. Wir können Sie jedoch bitten,
        einen Namen, zwecks persönlicher Ansprache im Newsletter, oder weitere
        Angaben, sofern diese für die Zwecke des Newsletters erforderlich sind,
        zu tätigen.
      </p>
      <p>
        <strong>Double-Opt-In-Verfahren:</strong> Die Anmeldung zu unserem
        Newsletter erfolgt grundsätzlich in einem sogenannte
        Double-Opt-In-Verfahren. D.h., Sie erhalten nach der Anmeldung eine
        E-Mail, in der Sie um die Bestätigung Ihrer Anmeldung gebeten werden.
        Diese Bestätigung ist notwendig, damit sich niemand mit fremden
        E-Mail-Adressen anmelden kann. Die Anmeldungen zum Newsletter werden
        protokolliert, um den Anmeldeprozess entsprechend den rechtlichen
        Anforderungen nachweisen zu können. Hierzu gehört die Speicherung des
        Anmelde- und des Bestätigungszeitpunkts als auch der IP-Adresse. Ebenso
        werden die Änderungen Ihrer bei dem Versanddienstleister gespeicherten
        Daten protokolliert.
      </p>
      <p>
        <strong>Löschung und Einschränkung der Verarbeitung: </strong> Wir
        können die ausgetragenen E-Mail-Adressen bis zu drei Jahren auf
        Grundlage unserer berechtigten Interessen speichern, bevor wir sie
        löschen, um eine ehemals gegebene Einwilligung nachweisen zu können. Die
        Verarbeitung dieser Daten wird auf den Zweck einer möglichen Abwehr von
        Ansprüchen beschränkt. Ein individueller Löschungsantrag ist jederzeit
        möglich, sofern zugleich das ehemalige Bestehen einer Einwilligung
        bestätigt wird. Im Fall von Pflichten zur dauerhaften Beachtung von
        Widersprüchen behalten wir uns die Speicherung der E-Mail-Adresse
        alleine zu diesem Zweck in einer Sperrliste (sogenannte
        &ldquo;Blocklist&rdquo;) vor.
      </p>
      <p>
        Die Protokollierung des Anmeldeverfahrens erfolgt auf Grundlage unserer
        berechtigten Interessen zu Zwecken des Nachweises seines ordnungsgemäßen
        Ablaufs. Soweit wir einen Dienstleister mit dem Versand von E-Mails
        beauftragen, erfolgt dies auf Grundlage unserer berechtigten Interessen
        an einem effizienten und sicheren Versandsystem.
      </p>
      <p>
        <strong>Hinweise zu Rechtsgrundlagen:</strong> Der Versand der
        Newsletter erfolgt auf Grundlage einer Einwilligung der Empfänger oder,
        falls eine Einwilligung nicht erforderlich ist, auf Grundlage unserer
        berechtigten Interessen am Direktmarketing, sofern und soweit diese
        gesetzlich, z.B. im Fall von Bestandskundenwerbung, erlaubt ist. Soweit
        wir einen Dienstleister mit dem Versand von E-Mails beauftragen,
        geschieht dies auf der Grundlage unserer berechtigten Interessen an
        einem effizienten und sicheren Versand. Das Registrierungsverfahren wird
        auf der Grundlage unserer berechtigten Interessen aufgezeichnet, um
        nachzuweisen, dass es in Übereinstimmung mit dem Gesetz durchgeführt
        wurde.
      </p>
      <strong>Inhalte:</strong>{' '}
      <p>Informationen zu uns, unseren Leistungen und Aktionen.</p>
      <ul>
        <li>
          <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen,
          Adressen); Kontaktdaten (z.B. E-Mail, Telefonnummern);
          Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen);
          Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
          Zugriffszeiten).
        </li>
        <li>
          <strong>Betroffene Personen:</strong> Kommunikationspartner.
        </li>
        <li>
          <strong>Zwecke der Verarbeitung:</strong> Direktmarketing (z.B. per
          E-Mail oder postalisch).
        </li>
        <li>
          <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1
          lit. a. DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f.
          DSGVO).
        </li>
        <li>
          <strong>Widerspruchsmöglichkeit (Opt-Out): </strong>Sie können den
          Empfang unseres Newsletters jederzeit kündigen, d.h. Ihre
          Einwilligungen widerrufen, bzw. dem weiteren Empfang widersprechen.
          Einen Link zur Kündigung des Newsletters finden Sie entweder am Ende
          eines jeden Newsletters oder können sonst eine der oben angegebenen
          Kontaktmöglichkeiten, vorzugswürdig E-Mail, hierzu nutzen.
        </li>
      </ul>
      <p>
        <strong>
          Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
        </strong>
      </p>
      <ul>
        <li>
          <strong>Messung von Öffnungs- und Klickraten: </strong>Die Newsletter
          enthalten einen sogenannte &ldquo;web-beacon&rdquo;, d.h., eine
          pixelgroße Datei, die beim Öffnen des Newsletters von unserem Server,
          bzw., sofern wir einen Versanddienstleister einsetzen, von dessen
          Server abgerufen wird. Im Rahmen dieses Abrufs werden zunächst
          technische Informationen, wie Informationen zum Browser und Ihrem
          System, als auch Ihre IP-Adresse und der Zeitpunkt des Abrufs,
          erhoben. Diese Informationen werden zur technischen Verbesserung
          unseres Newsletters anhand der technischen Daten oder der Zielgruppen
          und ihres Leseverhaltens auf Basis ihrer Abruforte (die mit Hilfe der
          IP-Adresse bestimmbar sind) oder der Zugriffszeiten genutzt. Diese
          Analyse beinhaltet ebenfalls die Feststellung, ob die Newsletter
          geöffnet werden und wann sie geöffnet werden.
        </li>
        <li>
          <strong>Mailjet: </strong>E-Mail-Versand- und
          E-Mail-Marketing-Plattform; <strong>Dienstanbieter:</strong> Mailjet
          SAS,13-13 bis, rue de l’Aubrac, 75012 Paris, Frankreich;{' '}
          <strong>Website:</strong>{' '}
          <a href="https://www.mailjet.de" target="_blank" rel="noreferrer">
            https://www.mailjet.de
          </a>
          ; <strong>Datenschutzerklärung:</strong>{' '}
          <a
            href="https://www.mailjet.de/privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            https://www.mailjet.de/privacy-policy
          </a>
          .
        </li>
      </ul>
      <h2 id="m263">Webanalyse, Monitoring und Optimierung</h2>
      <p>
        Die Webanalyse (auch als &ldquo;Reichweitenmessung&rdquo; bezeichnet)
        dient der Auswertung der Besucherströme unseres Onlineangebotes und kann
        Verhalten, Interessen oder demographische Informationen zu den
        Besuchern, wie z.B. das Alter oder das Geschlecht, als pseudonyme Werte
        umfassen. Mit Hilfe der Reichweitenanalyse können wir z.B. erkennen, zu
        welcher Zeit unser Onlineangebot oder dessen Funktionen oder Inhalte am
        häufigsten genutzt werden oder zur Wiederverwendung einladen. Ebenso
        können wir nachvollziehen, welche Bereiche der Optimierung bedürfen.{' '}
      </p>
      <p>
        Neben der Webanalyse können wir auch Testverfahren einsetzen, um z.B.
        unterschiedliche Versionen unseres Onlineangebotes oder seiner
        Bestandteile zu testen und optimieren.
      </p>
      <p>
        Sofern nachfolgend nicht anders angegeben, können zu diesen Zwecken
        Profile, d.h. zu einem Nutzungsvorgang zusammengefasste Daten angelegt
        und Informationen in einem Browser, bzw. in einem Endgerät gespeichert
        und aus diesem ausgelesen werden. Zu den erhobenen Angaben gehören
        insbesondere besuchte Webseiten und dort genutzte Elemente sowie
        technische Angaben, wie der verwendete Browser, das verwendete
        Computersystem sowie Angaben zu Nutzungszeiten. Sofern Nutzer in die
        Erhebung ihrer Standortdaten uns gegenüber oder gegenüber den Anbietern
        der von uns eingesetzten Dienste einverstanden erklärt haben, können
        auch Standortdaten verarbeitet werden.
      </p>
      <p>
        Es werden ebenfalls die IP-Adressen der Nutzer gespeichert. Jedoch
        nutzen wir ein IP-Masking-Verfahren (d.h., Pseudonymisierung durch
        Kürzung der IP-Adresse) zum Schutz der Nutzer. Generell werden die im
        Rahmen von Webanalyse, A/B-Testings und Optimierung keine Klardaten der
        Nutzer (wie z.B. E-Mail-Adressen oder Namen) gespeichert, sondern
        Pseudonyme. D.h., wir als auch die Anbieter der eingesetzten Software
        kennen nicht die tatsächliche Identität der Nutzer, sondern nur den für
        Zwecke der jeweiligen Verfahren in deren Profilen gespeicherten Angaben.
      </p>
      <p>
        <strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir die Nutzer um
        deren Einwilligung in den Einsatz der Drittanbieter bitten, ist die
        Rechtsgrundlage der Verarbeitung von Daten die Einwilligung. Ansonsten
        werden die Daten der Nutzer auf Grundlage unserer berechtigten
        Interessen (d.h. Interesse an effizienten, wirtschaftlichen und
        empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang
        möchten wir Sie auch auf die Informationen zur Verwendung von Cookies in
        dieser Datenschutzerklärung hinweisen.
      </p>
      <ul>
        <li>
          <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte
          Webseiten, Interesse an Inhalten, Zugriffszeiten);
          Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
        </li>
        <li>
          <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher,
          Nutzer von Onlinediensten).
        </li>
        <li>
          <strong>Zwecke der Verarbeitung:</strong> Reichweitenmessung (z.B.
          Zugriffsstatistiken, Erkennung wiederkehrender Besucher); Profile mit
          nutzerbezogenen Informationen (Erstellen von Nutzerprofilen).
        </li>
        <li>
          <strong>Sicherheitsmaßnahmen:</strong> IP-Masking (Pseudonymisierung
          der IP-Adresse).
        </li>
        <li>
          <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1
          lit. a. DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f.
          DSGVO).
        </li>
      </ul>
      <p>
        <strong>
          Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
        </strong>
      </p>
      <ul>
        <li>
          <strong>Matomo (ohne Cookies): </strong>Bei Matomo handelt es sich um
          eine datenschutzfreundliche Webanalysesoftware, die ohne Cookies
          eingesetzt wird und bei der die Erkennnung wiederkehrender Nutzer mit
          Hilfe eines so genannten &ldquo;digitalen Fingerabdrucks&rdquo;
          erfolgt, der anonymisiert gespeichert und alle 24 Stunden geändert
          wird; Beim &ldquo;digitalen Fingerabdruck&rdquo; werden
          Nutzerbewegungen innerhalb unseres Onlineangebotes mit Hilfe von
          pseudonymisierten IP-Adressen in Kombination mit nutzerseitige
          Browsereinstellungen so erfasst, dass Rückschlüsse auf die Identität
          einzelner Nutzer nicht möglich sind. Die im Rahmen der Nutzung von
          Matomo erhobenen Daten der Nutzer werden nur von uns verarbeitet und
          nicht mit Dritten geteilt; <strong>Website:</strong>{' '}
          <a href="https://matomo.org/" target="_blank" rel="noreferrer">
            https://matomo.org/
          </a>
          .
        </li>
      </ul>
      <h2 id="m15">Änderung und Aktualisierung der Datenschutzerklärung</h2>
      <p>
        Wir bitten Sie, sich regelmäßig über den Inhalt unserer
        Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung
        an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen
        dies erforderlich machen. Wir informieren Sie, sobald durch die
        Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder
        eine sonstige individuelle Benachrichtigung erforderlich wird.
      </p>
      <p>
        Sofern wir in dieser Datenschutzerklärung Adressen und
        Kontaktinformationen von Unternehmen und Organisationen angeben, bitten
        wir zu beachten, dass die Adressen sich über die Zeit ändern können und
        bitten die Angaben vor Kontaktaufnahme zu prüfen.
      </p>
      <h2 id="m10">Rechte der betroffenen Personen</h2>
      <p>
        Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die
        sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
      </p>
      <ul>
        <li>
          <strong>
            Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus
            Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung
            der Sie betreffenden personenbezogenen Daten, die aufgrund von Art.
            6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies
            gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
            Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um
            Direktwerbung zu betreiben, haben Sie das Recht, jederzeit
            Widerspruch gegen die Verarbeitung der Sie betreffenden
            personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen;
            dies gilt auch für das Profiling, soweit es mit solcher
            Direktwerbung in Verbindung steht.
          </strong>
        </li>
        <li>
          <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das
          Recht, erteilte Einwilligungen jederzeit zu widerrufen.
        </li>
        <li>
          <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung
          darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf
          Auskunft über diese Daten sowie auf weitere Informationen und Kopie
          der Daten entsprechend den gesetzlichen Vorgaben.
        </li>
        <li>
          <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den
          gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie
          betreffenden Daten oder die Berichtigung der Sie betreffenden
          unrichtigen Daten zu verlangen.
        </li>
        <li>
          <strong>
            Recht auf Löschung und Einschränkung der Verarbeitung:
          </strong>{' '}
          Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
          verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden,
          bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine
          Einschränkung der Verarbeitung der Daten zu verlangen.
        </li>
        <li>
          <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht,
          Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe
          der gesetzlichen Vorgaben in einem strukturierten, gängigen und
          maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen
          anderen Verantwortlichen zu fordern.
        </li>
        <li>
          <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben
          unbeschadet eines anderweitigen verwaltungsrechtlichen oder
          gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
          Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
          Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen
          Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie
          betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO
          verstößt.
        </li>
      </ul>
      <h2 id="m42">Begriffsdefinitionen</h2>
      <p>
        In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser
        Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe
        sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO definiert. Die
        gesetzlichen Definitionen sind verbindlich. Die nachfolgenden
        Erläuterungen sollen dagegen vor allem dem Verständnis dienen. Die
        Begriffe sind alphabetisch sortiert.
      </p>
      <ul>
        <li>
          <strong>Personenbezogene Daten:</strong> &ldquo;Personenbezogene
          Daten&rdquo; sind alle Informationen, die sich auf eine identifizierte
          oder identifizierbare natürliche Person (im Folgenden
          &ldquo;betroffene Person&rdquo; beziehen; als identifizierbar wird
          eine natürliche Person angesehen, die direkt oder indirekt,
          insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu
          einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B.
          Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert
          werden kann, die Ausdruck der physischen, physiologischen,
          genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen
          Identität dieser natürlichen Person sind.{' '}
        </li>
        <li>
          <strong>Profile mit nutzerbezogenen Informationen:</strong> Die
          Verarbeitung von &ldquo;Profilen mit nutzerbezogenen
          Informationen&rdquo;, bzw. kurz &ldquo;Profilen&rdquo; umfasst jede
          Art der automatisierten Verarbeitung personenbezogener Daten, die
          darin besteht, dass diese personenbezogenen Daten verwendet werden, um
          bestimmte persönliche Aspekte, die sich auf eine natürliche Person
          beziehen (je nach Art der Profilbildung können dazu unterschiedliche
          Informationen betreffend die Demographie, Verhalten und Interessen,
          wie z.B. die Interaktion mit Webseiten und deren Inhalten, etc.) zu
          analysieren, zu bewerten oder, um sie vorherzusagen (z.B. die
          Interessen an bestimmten Inhalten oder Produkten, das Klickverhalten
          auf einer Webseite oder den Aufenthaltsort). Zu Zwecken des Profilings
          werden häufig Cookies und Web-Beacons eingesetzt.{' '}
        </li>
        <li>
          <strong>Reichweitenmessung:</strong> Die Reichweitenmessung (auch als
          Web Analytics bezeichnet) dient der Auswertung der Besucherströme
          eines Onlineangebotes und kann das Verhalten oder Interessen der
          Besucher an bestimmten Informationen, wie z.B. Inhalten von Webseiten,
          umfassen. Mit Hilfe der Reichweitenanalyse können Webseiteninhaber
          z.B. erkennen, zu welcher Zeit Besucher ihre Webseite besuchen und für
          welche Inhalte sie sich interessieren. Dadurch können sie z.B. die
          Inhalte der Webseite besser an die Bedürfnisse ihrer Besucher
          anpassen. Zu Zwecken der Reichweitenanalyse werden häufig pseudonyme
          Cookies und Web-Beacons eingesetzt, um wiederkehrende Besucher zu
          erkennen und so genauere Analysen zur Nutzung eines Onlineangebotes zu
          erhalten.{' '}
        </li>
        <li>
          <strong>Verantwortlicher:</strong> Als &ldquo;Verantwortlicher&rdquo;
          wird die natürliche oder juristische Person, Behörde, Einrichtung oder
          andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke
          und Mittel der Verarbeitung von personenbezogenen Daten entscheidet,
          bezeichnet.{' '}
        </li>
        <li>
          <strong>Verarbeitung:</strong> &ldquo;Verarbeitung&rdquo; ist jeder
          mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder
          jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten.
          Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten,
          sei es das Erheben, das Auswerten, das Speichern, das Übermitteln oder
          das Löschen.{' '}
        </li>
      </ul>
      <p>
        <a
          href="https://datenschutz-generator.de/"
          title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <StaticImage
            src="https://datenschutz-generator.de/wp-content/plugins/ts-dsg/images/dsg-seal/dsg-seal-pp-de.png"
            alt="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
            width={250}
            height={250}
          />
        </a>
      </p>
      <h2 id="m54">Tracking Opt-Out (Matomo)</h2>
      <iframe
        title="Matomo Opt Out Tracking"
        className="h-52 w-full border-0"
        src="https://s.radschnellverbindungen.info/index.php?module=CoreAdminHome&action=optOut&language=de&backgroundColor=f0fdf4&fontColor=374151&fontSize=16px&fontFamily=Overpass"
      />
      <h2 id="m29">Datenschutzbestimmung (MapTiler)</h2>
      <div>
        <p>
          MapTiler ist ein Kartendienst. Seine Nutzung ist vollkommen
          freiwillig. Anbieter ist die MapTiler AG, Höfnerstrasse 98,
          Unterägeri, Zug 6314 in der Schweiz. Die Schweiz gehört weder der EU
          noch dem EWR an. Sie ist vielmehr ein sog. Drittstaat, in dem die
          DSGVO nicht gilt. Jedoch gibt es für die Schweiz einen
          Angemessenheitsbeschluss der EU Kommission nach Artikel 45 DSGVO,
          welcher der Schweiz im Allgemeinen ein angemessenes, der DSGVO
          entsprechendes Datenschutzniveau attestiert. Bitte lesen Sie vor einer
          Nutzung von MapTiler den{' '}
          <ExternalLink href="https://www.maptiler.com/privacy-policy/">
            Compliance-Hinweis von MapTiler
          </ExternalLink>{' '}
          durch. Danach erhebt die MapTiler AG zur Nutzung der Kartenfunktion
          und aus Gründen der IT-Sicherheit Ihre IP- Adresse. Bitte nutzen Sie
          MapTiler nur, wenn Sie dem Tool trauen. Im Verhältnis zu uns erfolgt
          Ihre Nutzung von MapTiler völlig anonym. Wir fragen keine
          personenbezogenen oder personenbeziehbaren Daten ab. Sofern wir solche
          freiwillig erhalten, löschen wir diese unverzüglich und
          unwiederbringlich.
        </p>
      </div>
      <OptOut />
    </LayoutArticle>
  );
};

export default DatenschutzPage;
