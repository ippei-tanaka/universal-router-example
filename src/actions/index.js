import {OPEN_NAV, CLOSE_NAV} from "@/actions/constants";

export const openNav = () => {
    return {
        type: OPEN_NAV
    }
};

export const closeNav = () => {
    return {
        type: CLOSE_NAV
    }
};