/**
 * StyleSeed / Toss — Formatting Utilities
 * Number, date, and trend formatters.
 * Includes Korean (KRW) formatters and generic currency/locale support.
 */

// ── 금액 포맷 ──────────────────────────────────────

/** 한국 원화 축약 포맷 (3,500원 / 1,870만원 / 3.8억원 / 1.2조원) */
export function formatKRW(value: number): string {
  const abs = Math.abs(value)
  const sign = value < 0 ? "-" : ""

  if (abs >= 1_000_000_000_000) {
    return `${sign}${(abs / 1_000_000_000_000).toFixed(1)}조원`
  }
  if (abs >= 100_000_000) {
    return `${sign}${(abs / 100_000_000).toFixed(1)}억원`
  }
  if (abs >= 10_000) {
    return `${sign}${Math.round(abs / 10_000).toLocaleString()}만원`
  }
  return `${sign}${abs.toLocaleString()}원`
}

/** 숫자 + 단위 분리 (JSX에서 큰 숫자 + 작은 단위 패턴용) */
export function splitNumberUnit(value: number): { number: string; unit: string } {
  const abs = Math.abs(value)
  const sign = value < 0 ? "-" : ""

  if (abs >= 1_000_000_000_000) {
    return { number: `${sign}${(abs / 1_000_000_000_000).toFixed(1)}`, unit: "조원" }
  }
  if (abs >= 100_000_000) {
    return { number: `${sign}${(abs / 100_000_000).toFixed(1)}`, unit: "억원" }
  }
  if (abs >= 10_000) {
    return { number: `${sign}${Math.round(abs / 10_000).toLocaleString()}`, unit: "만원" }
  }
  return { number: `${sign}${abs.toLocaleString()}`, unit: "원" }
}

/** 천 단위 콤마 (1,870 / 3,500) */
export function formatNumber(value: number, decimals = 0): string {
  return value.toLocaleString("ko-KR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

// ── 퍼센트 & 트렌드 ──────────────────────────────────

/** 트렌드 퍼센트 (+12.4% / -3.2%) */
export function formatPercent(value: number, decimals = 1): string {
  const prefix = value > 0 ? "+" : ""
  return `${prefix}${value.toFixed(decimals)}%`
}

/** 트렌드 방향 */
export function getTrendDirection(value: number): "up" | "down" | "neutral" {
  if (value > 0) return "up"
  if (value < 0) return "down"
  return "neutral"
}

// ── 날짜 ──────────────────────────────────────────

/** 한국 날짜 (2026년 3월 27일 금요일) */
export function formatDateKR(date: Date): string {
  const weekdays = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  const w = weekdays[date.getDay()]
  return `${y}년 ${m}월 ${d}일 ${w}`
}

/** 차트 축 날짜 (03/20) */
export function formatDateShort(date: Date): string {
  const m = String(date.getMonth() + 1).padStart(2, "0")
  const d = String(date.getDate()).padStart(2, "0")
  return `${m}/${d}`
}

/** 상대 시간 (3분 전, 2시간 전, 어제, 3월 20일) */
export function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / 60_000)
  const hours = Math.floor(diff / 3_600_000)
  const days = Math.floor(diff / 86_400_000)

  if (minutes < 1) return "방금 전"
  if (minutes < 60) return `${minutes}분 전`
  if (hours < 24) return `${hours}시간 전`
  if (days === 1) return "어제"
  if (days < 7) return `${days}일 전`
  return `${date.getMonth() + 1}월 ${date.getDate()}일`
}

/** 날짜 범위 (3/20 ~ 3/27) */
export function formatDateRange(start: Date, end: Date): string {
  return `${start.getMonth() + 1}/${start.getDate()} ~ ${end.getMonth() + 1}/${end.getDate()}`
}
