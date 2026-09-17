# Project Context - KrishiSetu

**Project:** KrishiSetu

**Repository:** https://github.com/LakshyaPhoolwani/KrishiSetu

**Purpose:** An AI-powered agricultural market-linkage and price-discovery platform.

## Problem

Strengthening market linkages and price discovery for farmers, helping them decide:

1. **Where** to sell
2. **When** to sell
3. **To whom** to sell

## Main decision principle

Optimize for **expected net realisation** rather than the highest listed price.
Listed price ignores transport, commission, wastage, grading, waiting time and
payment risk; net realisation does not.

## Future roles

- Farmer
- FPO / Cooperative
- Buyer
- Admin
- Quality Assessor
- Logistics Provider
- Payment Provider

## Future technology

- React web application
- React Native / Expo mobile application
- Node.js + Express backend
- MongoDB (source of truth)
- Clerk (authentication)
- OpenAI (assistant layer only, never financial calculations)
- Maps, Weather
- Payments
- Blockchain audit layer (provenance/audit only)

## Architectural principle

The AI/LLM layer must not independently invent or calculate financial values.
All important numerical and business calculations are implemented deterministically
in backend services.

## Important

**Phase 0 is foundation only.** No business features are implemented yet. See
[PROJECT_STATUS.md](./PROJECT_STATUS.md) for the phase plan and
[AI_RULES.md](./AI_RULES.md) for development rules.
