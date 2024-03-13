import {Container} from "@/components/Containers";
import Link from "next/link";
import {useTranslations} from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";


export function Footer() {
  const t = useTranslations('footer');

  return (
    <div className="_border-t py-9 lg:py-12 flex flex-col mt-16">
      <Container>
        <div className="text-sm text-muted-foreground mb-2">
          <LocaleSwitcher />
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {" "}
          <Link href="https://latentcat.com" target="_blank" className="border-b">
            Latent Cat
          </Link>. {t('reserve_rights')}
        </p>
        <p className="safe-pb" />
      </Container>
    </div>
  )
}