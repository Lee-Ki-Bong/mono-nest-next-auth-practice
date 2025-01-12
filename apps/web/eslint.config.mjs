import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends([
    "next/core-web-vitals", // Next.js Web Vitals 관련 규칙
    "next/typescript", // Next.js TypeScript 관련 규칙
    "eslint:recommended", // ESLint 기본 추천 규칙
    "plugin:tailwindcss/recommended", // TailwindCSS 규칙
    "standard", // JavaScript Standard 스타일 가이드
    "prettier" // Prettier와 충돌하는 규칙 비활성화
  ]),
  ...compat.plugins(["tailwindcss"]),
  ...compat.rules({
    "tailwindcss/classnames-order": "warn" // TailwindCSS 클래스 정렬 경고
  })
]

export default eslintConfig
