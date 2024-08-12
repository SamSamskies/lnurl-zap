import * as nip19 from "nostr-tools/nip19";
import { bech32 } from "@scure/base";
import { utf8ToBytes } from "@noble/hashes/utils";

const is32ByteHex = (str: string) => /^[0-9a-fA-F]{64}$/.test(str);

const validateNostrId = (id: string) => {
  if (is32ByteHex(id)) {
    return true;
  }

  try {
    const { type } = nip19.decode(id);

    switch (type) {
      case "npub":
      case "nprofile":
      case "note":
      case "nevent":
      case "naddr":
        return true;
      default:
        return false;
    }
  } catch {
    return false;
  }
};

/**
 * @param id - Any Nostr ID e.g. note ID, npub, nevent, etc.
 * @param [lnurlZapServerBaseUrl='https://lnurlzap.com/api/zap'] - Base URL for LNURL server endpoint that broadcasts anonymous zaps when LNURLs are paid
 */
export const encodeLnurl = (
  id: string,
  lnurlZapServerBaseUrl = "https://lnurlzap.com/api/zap",
) => {
  if (!validateNostrId(id)) {
    throw new Error(`${id} is not a valid Nostr ID.`);
  }

  const url = `${lnurlZapServerBaseUrl}/${id}`;
  const words = bech32.toWords(utf8ToBytes(url));

  return bech32.encode("lnurl", words, 1023).toUpperCase();
};
