import { naxiosInstance } from "./naxiosInstance";

export function doesUserHaveDaoFunctionCallProposalPermissions(
  accountId,
  policy
) {
  const userRoles = policy.roles.filter((role) => {
    console.log("policy", policy);

    if (role.kind === "Everyone") return true;
    return role.kind.Group && role.kind.Group.includes(accountId);
  });
  const kind = "call";
  const action = "AddProposal";
  // Check if the user is allowed to perform the action
  const allowed = userRoles.some(({ permissions }) => {
    return (
      permissions.includes(`${kind}:${action}`) ||
      permissions.includes(`${kind}:*`) ||
      permissions.includes(`*:${action}`) ||
      permissions.includes("*:*")
    );
  });
  return allowed;
}

export const checkIfDaoAddress = (addresss) => {
  return addresss.endsWith(
    "mainnet" ? "sputnik-dao.near" : "sputnik-dao.testnet" // TODO: not sure about this one
  );
};

export const valdiateUserInDao = async (daoAddress, accountId) => {
  const isValidAddress = checkIfDaoAddress(daoAddress);

  if (!isValidAddress) return "Please enter a valid DAO address.";

  const daoContractApi = naxiosInstance.contractApi({
    contractId: daoAddress,
  });

  const policy = await daoContractApi.view("get_policy");
  console.log("policy", policy);

  const hasPermission = doesUserHaveDaoFunctionCallProposalPermissions(
    accountId,
    policy
  );

  if (!hasPermission) return "The user does not have permission on this DAO.";
  return "";
};

export function updateList(list, item) {
  const index = list.indexOf(item);
  if (index === -1) {
    // Item does not exist, add it
    list.push(item);
  } else {
    // Item exists, remove it
    list.splice(index, 1);
  }
  return list;
}
