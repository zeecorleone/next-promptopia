import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";


export const GET = async (request, { params }) => {


    try{

        await connectToDB();
        
        const prompts = await Prompt.find({
            creator: params.id //coming from dynamic route variable
        }).populate('creator');

        return new Response(JSON.stringify(prompts), { status: 200 });

    }catch(error){
        console.log(error);
        return new Response('Failed to fetch user prompts', { status: 500 });
    }

}