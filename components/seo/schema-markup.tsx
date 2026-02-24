interface SchemaMarkupProps {
  schema: Record<string, unknown> | Record<string, unknown>[]
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(Array.isArray(schema) ? schema : schema),
      }}
    />
  )
}
