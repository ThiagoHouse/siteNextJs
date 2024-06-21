import NextLink from "next/link";

export default function Link({children, href, ...props}) {
    return (
        <div>
            <NextLink href={href} passHref>
                {children}
            </NextLink>
        </div>
    )
}